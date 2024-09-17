import { useEffect, useState } from "react";
import { Courses } from "../../Data/Data.js";
import CoursesList from "../CoursesList/CoursesList";
import { useTranslation } from "react-i18next";

const CoursesFilter = () => {
    const [filterCourses, setFilterCourses] = useState(Courses);
    const [activeCategory, setActiveCategory] = useState("All");

    const { t } = useTranslation();

    useEffect(() => {
        const storedCategory = localStorage.getItem("activeCategory");
        if (storedCategory) {
            setActiveCategory(storedCategory);
            handleChangeCategory(storedCategory);
        }
    }, []);

    const handleChangeCategory = (category) => {
        setActiveCategory(category);
        localStorage.setItem("activeCategory", category);

        if (category === "All") {
            setFilterCourses(Courses);
        } else {
            const filterCoursesData = Courses.filter((item) => item.categoryFilter === category);
            setFilterCourses(filterCoursesData);
        }
    };

    const categoryColors = {
        All: "border-[#0085F9]",
        children: "border-[#47B841]",
        teenagers: "border-[#9548F3]",
        adult: "border-[#FA8500]",
        corporate: "border-[#19ADAD]",
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-[15px] text-[20px] font-normal text-[#000000]">
                {["All", "children", "teenagers", "adult", "corporate"].map((category) => (
                    <button
                        // key={category.id}
                        key={category}
                        onClick={() => handleChangeCategory(category)}
                        className={`${activeCategory === category ? `${categoryColors[category]} border-b-[4px] rounded-[1.5px]` : ""
                            }`}
                    >
                        {t(`FilterCourses.${category.toLowerCase()}`)}
                    </button>
                ))}
            </div>
            <CoursesList coursesProps={filterCourses} />
        </div>
    );
};

export default CoursesFilter;
