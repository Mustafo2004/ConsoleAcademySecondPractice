import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
import ProjectsList from "../ProjectsList/ProjectsList"

const Projects = () => {
    const { t } = useTranslation()
    return (
        <div>
            <AboutTitle className="mt-[189px]">{t("Title.projects")}</AboutTitle>
            <ProjectsList  />
        </div>
    )
}

export default Projects
