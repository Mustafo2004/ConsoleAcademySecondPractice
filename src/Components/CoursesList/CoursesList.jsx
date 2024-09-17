/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import levelIcon from "../../assets/CardsIcons/LevelIcon.png"
import priceIcon from "../../assets/CardsIcons/priceIcon.png"
import calendarIcon from "../../assets/CardsIcons/CalendarIcon.png"
import clockIcon from "../../assets/CardsIcons/clockIcon.png"
import CoursesBt from "../CoursesBt/CoursesBt.jsx";
import style from "./CoursesList.module.css"
// import useFetch from "../../Hooks/Fetching.js"
// import { Courses } from "../../Data/Data.js";
// eslint-disable-next-line react/prop-types, no-unused-vars
const CoursesList = ({ coursesProps }) => {
    // const { data, loading, error } = useFetch("http://127.0.0.1:2442/faq/get")
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error:{error.message}</p>
    const { i18n } = useTranslation()

    console.log(i18n);
    const lng = localStorage.getItem("i18nextLng")

    const categoryColors = {
        adult: "bg-[#FA8500]",
        teenagers: "bg-[#9548F3]",
        children: "bg-[#47B841]",
        corporate: "bg-[#19ADAD]",
    }



    return (

        <div className="grid-cols-[repeat(auto-fill,minmax(376px,1fr))] grid   px-[160px] gap-[32px] mt-[100px] ">
            {coursesProps.map((item) => {
                return (
                    <Link key={item.id} to={`/coursePage/${item.id}`} className="376px">
                        <div className={`  min-h-[430px] border-[2px] border-[#000000] p-[10px] rounded-[10px]   absolute hover: ? hidden :  ${style.course}`}></div>
                        <div className={`  min-h-[430px] border-[2px] border-[#000000] p-[10px] rounded-[10px] `}>
                            <p className={`${categoryColors[item.categoryFilter]} mb-[16px]   h-[30px] text-[14px] font-normal rounded-[5px] text-[#FFFFFF] px-[16px] flex items-center justify-start py-[6px]`}>
                                {lng == "ru" ? item.ru.categoryBt : item.en.categoryBt}
                            </p>
                            <div className="px-[30px]">
                                <div className="">
                                    <h1 className="text-[#000000] font-bold text-[22.86px]">{lng == "ru" ? item.ru.title : item.en.title}</h1>
                                    <p className="font-normal text-[16px] text-[#5F6073] line-clamp-5">{lng == "ru" ? item.ru.description : item.en.description}</p>
                                </div>
                                <div className="font-bold text-[13.71px] mt-[16px]">

                                    <div className="flex items-center justify-between   border-t border-dashed border-[#000000] py-[5.71px]  ">
                                        <div className="flex items-center justify-start h-[34.29px] gap-[11.43px]">
                                            <img src={levelIcon} alt="fdfddf" />
                                            <p>{lng == "ru" ? item.ru.level : item.en.level}</p>
                                        </div>
                                        <div className="flex h-[34.29px] items-center justify-start gap-[11.43px]">
                                            <img src={priceIcon} alt="fdfddf" />
                                            <p>{lng == "ru" ? item.ru.price : item.en.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between  border-t border-dashed border-[#000000] py-[5.71px]  ">
                                        <div className="flex h-[34.29px] items-center justify-start gap-[11.43px]">
                                            <img src={calendarIcon} alt="fdfddf" />
                                            <p>{lng == "ru" ? item.ru.data : item.en.data}</p>
                                        </div>
                                        <div className="flex items-center justify-start h-[34.29px] gap-[11.43px]">
                                            <img src={clockIcon} alt="fdfddf" />
                                            <p>{lng == "ru" ? item.ru.duration : item.en.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/coursesField/${item.id}`}>
                                <CoursesBt />
                            </Link>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CoursesList
