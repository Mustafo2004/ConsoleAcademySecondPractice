import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
import PropTypes from 'prop-types';
import instagram from "../../assets/Social/instagram.png"
import linkeln from "../../assets/Social/in.png"

const Teacher = ({ item }) => {
    const { t } = useTranslation()
    return (
        <div className="mt-[100px]">
            <AboutTitle>{t("Title.teachers")}</AboutTitle>
            <div className="flex justify-start items-center mt-[50px] gap-[22px] mb-[130px]">
                {
                    item.en.Teacher.map((item) => {
                        return (

                            <div key={item.id} className="w-[376px]  border-[#000000] rounded-[10px] p-[15px] border-[2px]" >
                                <img className="w-[346px] h-[346px] border rounded-[10px]" src={item.image} alt="" />
                                <p className="text-[#5F6073] text-[20px] mt-[26.8px]  font-bold">{item.name}</p>
                                <p className="text-[#5F6073] mt-[10px] text-[16px] font-normal">{item.position}</p>
                                <div className="flex items-start gap-5 mt-[10.2px]">
                                    <img src={instagram} alt="" />
                                    <img src={linkeln} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
Teacher.propTypes = {
    item: PropTypes.object,
};
export default Teacher
