import { useTranslation } from "react-i18next"
import Title from "../Title/Title"
import VideoReviewsList from "../VideoReviewsList/VideoReviewsList"
const VideoReviewes = () => {
    const { t } = useTranslation()
    return (
        <div className="px-[119px] flex items-center justify-center flex-col">
            <Title className="mt-[150px]">{t("Title.graduates")}</Title>
            <p className="w-[1540px] line-clamp-2 my-[50px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque, mus bibendum. Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.</p>
            <VideoReviewsList />
        </div>
    )
}

export default VideoReviewes
