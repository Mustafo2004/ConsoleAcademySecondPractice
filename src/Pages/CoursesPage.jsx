import { useTranslation } from "react-i18next"
import Title from "../Components/Title/Title"

import CoursesFilter from "../Components/CoursesFilter/CoursesFilter"

const CoursesPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Title className="my-[100px]">{t("Title.courses")}</Title>
            <CoursesFilter />
            {/* <CoursesList coursesProps={Courses} /> */}
        </div>
    )
}

export default CoursesPage
