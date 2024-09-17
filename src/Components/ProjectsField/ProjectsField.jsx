import { useTranslation } from "react-i18next"
import Title from "../Title/Title"
import CoursesFieldTitl from "../CoursesFieldTitl/CoursesFieldTitl"
import Input from "../Input/Input"
import CoursesFieldButton from "../CoursesFieldButton/CoursesFieldButton"
const ProjectsField = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Title className="mt-[150px] mb-[50px]">{t("Title.creatingProject")}</Title>
            <div className="px-[264px]">
                <div className="w-[1,392px] p-[80px] border rounded-[10px] border-[#000000] my-[100px]">
                    <div className="flex items-center justify-center">
                        <p className="font-light text-[24px] mb-[50px] ">Please provide your contact details, and we will contact you soon.</p>
                    </div>
                    <div>
                        <CoursesFieldTitl className="mb-[24px]">{t("InputTitle.information_about_you")}</CoursesFieldTitl>
                        <div className="flex items-center justify-between gap-[15px]">

                            <div className="flex items-start justify-start gap-[15px] flex-col">
                                <Input type="text" placeholder="Student Full Name*" className="" />
                                <Input type="text" placeholder="Student Phone Number*" className="" />
                            </div>
                            <div className="flex items-start justify-start gap-[15px] flex-col   ">
                                <Input type="data" placeholder="22 August 2007 *" className="" />
                                <Input type="text" placeholder="Email Address**" className="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <CoursesFieldTitl className="mb-[24px]">{t("InputTitle.information_about_parents")}</CoursesFieldTitl>
                        <div>
                            <Input type="data" placeholder="Briefly describe the new project. *" className="w-[100%] mb-[15px] h-[150px]" />


                        </div>

                    </div>

                    <CoursesFieldButton>{"send"}</CoursesFieldButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectsField
