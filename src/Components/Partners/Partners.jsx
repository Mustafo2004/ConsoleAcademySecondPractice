import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
import ParnterList from "../ParnterList/ParnterList"
const Partners = () => {
    const { t } = useTranslation()
    return (
        <div className="mt-[150px]">
            <AboutTitle>{t("Title.partner")}</AboutTitle>
            <ParnterList />
        </div>
    )
}

export default Partners
