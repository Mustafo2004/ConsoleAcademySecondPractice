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

const AddingCourses = () => {
    // State to handle English and Russian data separately
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
    // !
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "UserLoggedIn=66e93d50fb240fc138ee4e42");

    const raw = JSON.stringify({
        "phone": "+992987654321",
        "password": "1234"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:2442/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    // !

    const [courseInfo, setCourseInfo] = useState("");
    const [courseInfoRu, setCourseInfoRu] = useState("");
    const [file, setFile] = useState(null);

    const { postData, response, loading, error } = usePostData("http://127.0.0.1:2442/course/add");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("coursesEn", JSON.stringify(coursesEn));
        formData.append("coursesRu", JSON.stringify(coursesRu));
        formData.append("courseInfo", courseInfo);
        formData.append("courseInfoRu", courseInfoRu);
        if (file) formData.append("file", file);

        await postData(formData);
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
        </div>
    );
};

export default AddingCourses;
