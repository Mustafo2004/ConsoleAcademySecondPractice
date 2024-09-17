import { useTranslation } from "react-i18next"
import Title from "../Title/Title"
import FaqList from "../FaqList/FaqList"

const Faq = () => {

    const { t } = useTranslation()
    return (
        <div>
            <Title className="mt-[150px]">{t('Title.Faq')}</Title>
            <FaqList />
        </div>
    )
}

export default Faq
