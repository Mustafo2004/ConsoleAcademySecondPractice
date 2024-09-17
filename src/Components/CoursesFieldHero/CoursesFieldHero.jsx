import style from "./CoursesFieldHero.module.css"
import CoursesFiledHeroImg from "../../assets/Hero/HeroCourse.png"
import { useParams } from "react-router-dom"
import { Courses } from "../../Data/Data"
import { useTranslation } from "react-i18next"
import level from "../../assets/Icons/whiteLevel.svg"
import price from "../../assets/Icons/whteprive.svg"
import calender from "../../assets/Icons/whitecalendeer.png"
import clock from "../../assets/Icons/whiteclock.png"


const CoursesFieldHero = () => {
  const { coursesFieldId } = useParams()
  const item = Courses.find(each => each.id === (coursesFieldId))
  const { i18n } = useTranslation();
  const lng = localStorage.getItem("i18nextLng")

  if (!item) {
    return <p>
    </p>
  }
  const categoryColors = {
    adult: "bg-[#FA8500]",
    teenagers: "bg-[#9548F3]",
    children: "bg-[#47B841]",
    corporate: "bg-[#19ADAD]",
  }

  return (
    <div className={`${style.bg} `}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(${CoursesFiledHeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: "700px",
        paddingLeft: "160px"
      }}>
      <div className="text-white w-[784px] py-[60px]">
        <p className={`${categoryColors[item.categoryFilter]}  py-[5px] px-[16px] w-[100px] mb-[60px] rounded-[5px] flex items-center justify-center font-medium text-[14px]`}>
          {lng == "ru" ? item.ru.categoryBt : item.en.categoryBt}
        </p>
        <h1 className="font-bold  mb-[40px] text-[48px] ">{i18n.lng == "ru" ? item.ru.title : item.en.title}</h1>
        <p className="font-normal text-[32px]">{i18n.lng == "ru" ? item.ru.description : item.en.description}</p>
        <div className="flex items-center justify-start font-semibold text-[22.14px] gap-[60px] mt-[32.64px]">
          <div className="flex items-center justify-start gap-[18.45px]">
            <img src={level} alt="" />
            <p>{i18n.lng == "ru" ? item.ru.level : item.en.level}</p>
          </div>
          <div className="flex items-center justify-start gap-[18.45px]">
            <img src={price} alt="" />
            <p>{i18n.lng == "ru" ? item.ru.price : item.en.price}</p>
          </div>
          <div className="flex items-center justify-start gap-[18.45px]">
            <img src={calender} className="flex items-center justify-start gap-[18.45px]" alt="" />
            <p>{i18n.lng == "ru" ? item.ru.data : item.en.data}</p>
          </div>
          <div className="flex items-center justify-start gap-[18.45px]">
            <img src={clock} alt="" />
            <p>{i18n.lng == "ru" ? item.ru.duration : item.en.duration}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesFieldHero
