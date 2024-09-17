import { useTranslation } from "react-i18next"
import AboutTitle from "../AboutTitle/AboutTitle"
const OurApproach = () => {
    const { t } = useTranslation()
    return (
        <div className="mt-[189px]">
            <AboutTitle>{t("Title.approach")}</AboutTitle>
            <p className="text-[#5F6073] font-normal text-[24px] mt-[50px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</p>
        </div>
    )
}

export default OurApproach
