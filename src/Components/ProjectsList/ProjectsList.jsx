import { useTranslation } from "react-i18next"
import { ProjectsArray } from "../../Data/Data"
import calender from "../../assets/Icons/calender.png"
import CustomerButton from "../CustomerButton/CustomerButton"
const ProjectsList = () => {
    const lng = localStorage.getItem("i18nextLng")
    const { t } = useTranslation()
    return (
        <div className="grid-cols-[repeat(auto-fill,minmax(784px,1fr))] grid  gap-[22px] px-[160px]">
            {
                ProjectsArray.map((item) => {
                    return (
                        <div key={item.id} className="">
                            <div className="  mt-[50px] h-[335px] border-[2px] p-[15px] rounded-[10px] border-[#000000] flex items-start justify-between gap-[25px]">

                                <div>
                                    <img className="w-[375px] h-[305px] rounded-[10px] border" src={item.image} alt="" />
                                </div>
                                <div className="w-[379px] ">
                                    <h1 className="font-bold mb-[5.71px] text-[24px]">{lng == "ru" ? item.ru.title : item.en.title} </h1>
                                    <p className="line-clamp-6">{lng == "ru" ? item.ru.description : item.en.description}</p>
                                    <div className="flex border-b border-t border-dashed py-[5.64px] border-[#1D192B] items-center mt-[11.36px] font-bold text-[14px] justify-start gap-[11.43px]">
                                        <img src={calender} alt="" />
                                        {lng == "ru" ? item.ru.date : item.en.date}
                                    </div>
                                    <CustomerButton className="mt-[15px] w-[400px]  h-[40px]" >{t("Button.more")}</CustomerButton>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList
