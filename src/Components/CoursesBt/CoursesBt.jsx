import { useTranslation } from "react-i18next"
import { FaArrowUp } from "react-icons/fa"
import { useState } from "react"

const CoursesBt = () => {
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex items-center justify-center mt-[18.43px]">
            <button
                className="bg-[#0085F9] text-[#FFFFFF] gap-[4.67px] min-w-[321.14px] flex items-center justify-center rounded-[5px] px-[90px] py-[10px] button-hover-effect hover:w-[331.14px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="arrow-text flex items-center gap-[4.67px]">
                    <FaArrowUp
                        className={`transition-transform duration-300 ${isHovered ? 'rotate-90' : ''}`}
                    />
                    {t("Button.header")}
                </div>
            </button>
        </div>
    )
}

export default CoursesBt
