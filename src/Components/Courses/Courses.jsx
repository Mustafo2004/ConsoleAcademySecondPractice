import { useTranslation } from "react-i18next";
import Title from "../Title/Title"
import { Courses as CoursesData } from "../../Data/Data"
import CoursesList from "../CoursesList/CoursesList";
import CustomerButton from "../CustomerButton/CustomerButton";
import { Link } from "react-router-dom";

const Courses = () => {
  const { t } = useTranslation();
  const filterCourses = CoursesData.slice(0, 4);
  return (

    <div>
      <Title >{t("Title.populatTitle")}</Title>
      <CoursesList coursesProps={filterCourses} />
      <Link to="/courses">
        <CustomerButton className="mt-[50px] w-[321px] h-[40px] hover:w-[331px]">{t("Button.more")}</CustomerButton>
      </Link>
    </div>
  )
}

export default Courses
