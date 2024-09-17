import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
import TeamList from "../TeamList/TeamList"

const Team = () => {
    const { t } = useTranslation()
    return (
        <div className="mt-[189px]">
            <AboutTitle>{t("Title.team")}</AboutTitle>
            <TeamList />
        </div>
    )
}

export default Team
