import { useTranslation } from "react-i18next";
import AboutTitle from "../AboutTitle/AboutTitle";

import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types

SuitableCourse.propTypes = {
    item: PropTypes.object,
};
export default function SuitableCourse({ item }) {
    const { i18n } = useTranslation();
    const { t } = useTranslation()

    return (
        <div className="flex items-center justify-between border gap-5 border-[#000000] rounded-[10px] p-[40px] w-[1,600px] h-[469px]">
            <div>
                <AboutTitle className="mb-[16px]">{t("Title.forwhomthiscourse")}</AboutTitle>
                <p className="text-[#5F6073] font-semibold  line-clamp-3text-[24px]"> {i18n.lng == "ru" ? item.ru.aboutCourse : item.en.aboutCourse} </p>
                <p className="text-[#5F6073] line-clamp-4 font-normal text-[24px] mt-[30px]"> {i18n.lng == "ru" ? item.ru.aboutCourse : item.en.aboutCourse} </p>
            </div>
            <img className="w-[758px] h-[407px] rounded-[10px]" src={item.who_can_leanImage} alt="" />
        </div >
    )
}
