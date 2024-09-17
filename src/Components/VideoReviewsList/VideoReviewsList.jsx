import { YouTubeVideo } from "../../Data/Data"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useRef } from "react";
const VideoReviewsList = () => {
    const swiperRef = useRef(null);
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",

            }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="px-[125px] w-[1691.5px]"

        >
            <div className="w-[800px]">
                {

                    YouTubeVideo.map((item) => (
                        <SwiperSlide key={item.id} className="my-[50px] transition-transform duration-300 px-[165px] ">
                            <div className="">
                                <iframe width="320" height="240" src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </div>
            <div className="flex items-center justify-center">
                <button className="swiper-button-next w-[60px] h-[60px] rounded-full top-[160px] right-[560px]"></button>
                <button className="swiper-button-prev w-[60px] h-[60px] rounded-full top-[160px] right-[560px]"></button>
            </div>
        </Swiper>
    )
}

export default VideoReviewsList
