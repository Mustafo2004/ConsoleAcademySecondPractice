import { Partners } from "../../Data/Data";
import quoteeRight from "../../assets/Icons/fontisto_quote-a-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const ParnterList = () => {
    const lng = localStorage.getItem("i18nextLng");

    return (
        <div className="w-full">
            <Swiper
                spaceBetween={32}
                slidesPerView={2}
                modules={[Autoplay]} // Add Autoplay module here
                autoplay={{
                    delay: 3000, // Auto-slide every 3 seconds
                    disableOnInteraction: false,
                }}
            >
                {Partners.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="w-[648px] border-[1.65px] border-[#000000] h-[276.89px] rounded-[8.27px] p-[26.45px]">
                            <div className="flex relative items-center justify-start gap-[41.33px] border-dashed border-[#1D192B] mb-[16.53px] border-b pb-[16.3px]">
                                <img src={item.partenrLogo} alt="" />
                                <div>
                                    <p className="font-medium text-[26.45px]">
                                        {lng === "ru" ? item.ru.title : item.en.title}
                                    </p>
                                    <p className="font-normal text-[16.53px]">
                                        {lng === "ru" ? item.ru.titleDescriotion : item.en.titleDescriotion}
                                    </p>
                                </div>
                                <img className="absolute right-0" src={quoteeRight} alt="" />
                            </div>
                            <p className="line-clamp-6 text-[#5F6073] text-[14.88px] font-normal">
                                {lng === "ru" ? item.ru.description : item.en.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ParnterList;
