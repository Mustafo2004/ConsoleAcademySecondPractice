import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
import iconMissioon from "../../assets/Icons/Icons.png"

const Mission = () => {
    const { t } = useTranslation()
    return (
        <div className="w-[1,600px] p-[40px] border border-black mt-[150px] rounded-[10px]">
            <AboutTitle>{t("Title.mission")}</AboutTitle>
            <div className="flex items-center justify-start gap-[50px] mt-[50px]">
                <img src={iconMissioon} alt="" />
                <p className="w-[1370px] text-[32px] font-normal ">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. </p>
            </div>
            <hr className=" w-full  border my-[50px]" />
            <div className="flex items-start justify-center gap-[10px] flex-col">
                <ul className="list-disc flex items-start h-[83px] justify-center  gap-[50px] ">
                    <li className=" line-clamp-2   w-[735px] ">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</li>
                    <li className="  line-clamp-2  w-[735px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</li>
                </ul>
                <ul className="list-disc flex h-[83px]    items-start justify-center  gap-[50px]">
                    <li className="line-clamp-2  w-[735px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</li>
                    <li className="line-clamp-2  w-[735px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</li>
                </ul>
            </div>
        </div>
    )
}

export default Mission
