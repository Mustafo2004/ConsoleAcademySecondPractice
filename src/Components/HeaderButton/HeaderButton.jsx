import { useTranslation } from "react-i18next"

// eslint-disable-next-line react/prop-types
const HeaderButton = ({ className }) => {
    const { t } = useTranslation()
    return (
        <button className={`${className} bg-[#0085F9] rounded-[5px] py-[4px] px-[24px] flex items-center justify-center h-[40px] text-[#FFFFFF]`}>
            {t("Button.header")}
        </button>
    )
}

export default HeaderButton
