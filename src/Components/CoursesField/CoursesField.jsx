import { useTranslation } from "react-i18next"
import CoursesFieldTitl from "../CoursesFieldTitl/CoursesFieldTitl"
import Input from "../Input/Input"
import CoursesFieldButton from "../CoursesFieldButton/CoursesFieldButton"


const CoursesField = () => {
  const { t } = useTranslation()


  return (
    <div className="px-[264px]">
      <div className="w-[1,392px] p-[80px] border rounded-[10px] border-[#000000] my-[100px]">
        <div className="flex items-center justify-center">
          <p className="font-light text-[24px] mb-[50px] ">Please provide your contact details, and we will contact you soon.</p>
        </div>
        <div>
          <CoursesFieldTitl className="mb-[24px]">{t("InputTitle.information_about_you")}</CoursesFieldTitl>
          <div className="flex items-center justify-between">

            <div className="flex items-start justify-start gap-[15px] flex-col">
              <Input type="text" placeholder="Student Full Name*" className="w-[608.5px]" />
              <Input type="text" placeholder="Student Phone Number*" className="w-[608.5px]" />
            </div>
            <div className="flex items-start justify-start gap-[15px] flex-col  ">
              <div className="flex items-center justify-start gap-5 w-[100%]">
                <span className="text-[16px] font-light">Student Birth date:</span>
                <Input type="data" placeholder="22 August 2007 *" className="w-[100%]" />
              </div>
              <Input type="text" placeholder="Email Address**" className="w-[100%]" />
            </div>
          </div>
        </div>
        <div>
          <CoursesFieldTitl className="mb-[24px]">{t("InputTitle.information_about_parents")}</CoursesFieldTitl>
          <div>
            <Input type="data" placeholder="22 August 2007 *" className="w-[1232px] mb-[15px]" />

            <div className="flex items-start justify-start gap-[15px] ">
              <Input type="data" placeholder="22 August 2007 *" className="w-[608.5px]" />
              <Input type="text" placeholder="Email Address**" className="w-[608.5px]" />
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center gap-5 my-[50px]">
          <input type="checkbox" />
          <p>Подтвердите, что вы ознакомились с условиями оплаты курса.</p>
        </div>
        <CoursesFieldButton>{"Confirm"}</CoursesFieldButton>
      </div>

    </div >
  )
}

export default CoursesField
