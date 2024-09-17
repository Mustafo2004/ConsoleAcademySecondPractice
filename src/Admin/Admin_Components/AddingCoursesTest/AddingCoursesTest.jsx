import { useState } from "react";
import AddingFile from "../AddingFile/AddingFile";
import Title from "../../../Components/Title/Title";
import AddminFileds from "../AddminFileds/AddminFileds";
import AddminFiledsRu from "../AddminFiledsRu/AddminFiledsRu";
import SubTitle from "../SubTItle/SubTItle";
import AddminInput from "../AddminInput/AddminInput";
import usePostData from "../../../Hooks/Post";
import AdvantagesCourse from "../AdvantagesCourse/AdvantagesCourse";
import AdvantagesCourseRU from "../AdvantagesCourseRU/AdvantagesCourseRU";

const AddingCoursesTest = () => {
    const [coursesEn, setCoursesEn] = useState({
        coursesName: "",
        coursesInfo: "",
        coursesData: "",
        coursesDuration: "",
        coursesStatus: "",
        coursesLevel: "",
        coursesAgeFilter: "",
        coursesPrice: "",
        courseInfo: "",
        advantages_1: "",
        advantages_2: "",
        advantages_3: "",
    });

    const [coursesRu, setCoursesRu] = useState({
        coursesName: "",
        coursesInfo: "",
        coursesData: "",
        coursesDuration: "",
        coursesStatus: "",
        coursesLevel: "",
        coursesAgeFilter: "",
        coursesPrice: "",
        courseInfo: "",
        advantages_1: "",
        advantages_2: "",
        advantages_3: "",
    });

    const [courseInfo, setCourseInfo] = useState("");
    const [courseInfoRu, setCourseInfoRu] = useState("");
    const [file, setFile] = useState(null);

    // State to store the array of courses
    const [courses, setCourses] = useState([]);

    const { postData, response, loading, error } = usePostData("http://127.0.0.1:2442/course/add");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCourse = {
            coursesEn,
            coursesRu,
            courseInfo,
            courseInfoRu,
            file,
        };

        // Add the new course to the array
        setCourses([...courses, newCourse]);

        const formData = new FormData();
        formData.append("coursesEn", JSON.stringify(coursesEn));
        formData.append("coursesRu", JSON.stringify(coursesRu));
        formData.append("courseInfo", courseInfo);
        formData.append("courseInfoRu", courseInfoRu);
        if (file) formData.append("file", file);

        await courses(formData);
    };

    const handleChange = (e) => {
        if (e.target.name === "courseInfo") {
            setCourseInfo(e.target.value);
        } else if (e.target.name === "courseInfoRu") {
            setCourseInfoRu(e.target.value);
        } else {
            if (e.target.dataset.lang === "en") {
                setCoursesEn({ ...coursesEn, [e.target.name]: e.target.value });
            } else {
                setCoursesRu({ ...coursesRu, [e.target.name]: e.target.value });
            }
        }
    };

    const handleFileChange = (file) => {
        setFile(file);
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <Title>{"Add course"}</Title>
            <SubTitle>{"Main info"}</SubTitle>
            <AddingFile onFileChange={handleFileChange} />
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-5">
                <div className="flex items-center justify-center gap-11">
                    <div className="w-[500px] flex items-center justify-center flex-col">
                        <h1 className="font-light text-[34px]">English</h1>
                        <AddminFileds data={coursesEn} setData={setCoursesEn} handleChange={handleChange} />
                    </div>
                    <div className="w-[500px] flex items-center justify-start flex-col">
                        <h1 className="font-light text-[34px]">Russian</h1>
                        <AddminFiledsRu data={coursesRu} setData={setCoursesRu} handleChange={handleChange} />
                    </div>
                </div>

                <SubTitle>{"About this course"}</SubTitle>
                <AddingFile onFileChange={handleFileChange} />

                <div className="flex items-center mt-[20px] gap-10">
                    <AddminInput
                        placeholder="Additional info"
                        name="courseInfo"
                        type="text"
                        value={courseInfo}
                        onChange={handleChange}
                    />
                    <AddminInput
                        placeholder="дополнительная информация"
                        name="courseInfoRu"
                        type="text"
                        value={courseInfoRu}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center justify-center flex-col gap-3">
                    <SubTitle>{"Advantages of the course"}</SubTitle>
                    <div className="flex items-center justify-center gap-8">
                        <AdvantagesCourse data={coursesEn} setData={setCoursesEn} handleChange={handleChange} />
                        <AdvantagesCourseRU data={coursesRu} setData={setCoursesRu} handleChange={handleChange} />
                    </div>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
                {response && <p>Course added successfully!</p>}
                {error && <p>{error}</p>}
            </form>


            <div className="mt-5">
                <h3>Submitted Courses</h3>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index} className="mb-4">
                            <h4>English Course Data</h4>
                            <ul>
                                {Object.entries(course.coursesEn).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                            <h4>Russian Course Data</h4>
                            <ul>
                                {Object.entries(course.coursesRu).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Additional Info:</strong> {course.courseInfo}</p>
                            <p><strong>Дополнительная информация:</strong> {course.courseInfoRu}</p>
                            {course.file && <p><strong>File:</strong> {course.file.name}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddingCoursesTest;
