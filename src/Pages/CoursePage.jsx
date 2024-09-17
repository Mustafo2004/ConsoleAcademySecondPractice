import CoursesPageHero from "../Components/CoursesPageHero/CoursesPageHero"
import { CoursesPage } from "../Data/Data"
import AboutTitle from "../Components/AboutTitle/AboutTitle"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import check from "../assets/Icons/pixelarticons_check.svg"
import SuitableCourse from "../Components/SuitableCourse/SuitableCourse"
import Teacher from "../Components/Teacher/Teacher"
import CoursesList from "../Components/CoursesList/CoursesList"
import { Courses } from "../Data/Data"
import CustomerButton from "../Components/CustomerButton/CustomerButton"
import Syllabus from "../Components/Syllabus/Syllabu"

const CoursePage = () => {
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const { coursePageid } = useParams()
    const item = CoursesPage.find(each => each.id === (coursePageid))
    const filterCourses = Courses.slice(0, 4);
    return (
        <div className="">
            <CoursesPageHero />
            <div className="px-[160px] mt-[100px]">
                <AboutTitle>{t("Title.aboutcourse")}</AboutTitle>
                <p className="mt-[50px] font-normal text-[24px] text-[#5F6073]">
                    {i18n.lng == "ru" ? item.ru.aboutCourse : item.en.aboutCourse} </p>
                <div>
                    <AboutTitle className="mb-[50px] mt-[100px]" >{t("Title.courseadvanages")}
                        <span className="ml-[10px]">{i18n.lng == "ru" ? item.ru.title : item.en.title}</span>
                    </AboutTitle>
                    <div className="border rounded-[10px] my-[50px] h-[156px] border-[#000000]  flex items-center justify-between px-[100px]">
                        {
                            item.en.advantages.map((item) => {
                                return (
                                    <div key={item.id} className="flex items-center justify-start gap-5">
                                        <img src={check} alt="" />
                                        <p className="line-clamp-3 w-[]">{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <SuitableCourse item={item} />
                    <Teacher item={item} />
                    <Syllabus item={item} />
                </div>

            </div>
            <div>
                <AboutTitle className="px-[160px]" >{t("Title.popularCourses")}</AboutTitle>
                <CoursesList coursesProps={filterCourses} />
                <CustomerButton className="mt-[50px]">{t("Button.all")}</CustomerButton>
            </div>
        </div>
    )
}

export default CoursePage
