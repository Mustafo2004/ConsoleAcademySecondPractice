import { useTranslation } from "react-i18next";
import AboutUsTitle from "../AboutTitle/AboutTitle";
import image from "../../assets/AboutPage/createingConsole1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from "./CreatingConsole.module.css";

const CreatingConsole = () => {
    const { t } = useTranslation();

    return (
        <div className="relative mt-[150px]">
            {/* Custom Navigation Arrows */}
            <div className="absolute left-[-50px] top-1/2">
                <div className="swiper-button-prev custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="absolute right-[-50px] top-1/2">
                <div className="swiper-button-next custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <Swiper
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <div className="h-[469px] p-[40px] border-[#000000] border rounded-[10px]">
                        <div className="flex items-center justify-between">
                            <div className="w-[744px]">
                                <AboutUsTitle>{t("Title.creating")}</AboutUsTitle>
                                <p className="font-semibold text-[24px] text-[#5F6073]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque.
                                </p>
                                <p className="text-[#5F6073] line-clamp-4 font-semibold text-[24px]">
                                    Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.
                                </p>
                            </div>
                            <div>
                                <img className="w-[744px] rounded-[10px]" src={image} alt="Creating Console" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[469px] p-[40px] border-[#000000] border rounded-[10px]">
                        <div className="flex items-center justify-between">
                            <div className="w-[744px]">
                                <AboutUsTitle>{t("Title.creating")}</AboutUsTitle>
                                <p className="font-semibold text-[24px] text-[#5F6073]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hac ipsum pharetra finibus erat mattis nec dis quam. Sapien quisque quisque faucibus scelerisque.
                                </p>
                                <p className="text-[#5F6073] line-clamp-4 font-semibold text-[24px]">
                                    Phasellus vehicula gravida blandit eleifend quisque maximus lectus in. Morbi posuere gravida erat dignissim, dapibus vulputate pretium. Tortor integer venenatis litora netus montes at hac curae. Natoque imperdiet molestie neque class laoreet mauris semper. Tortor bibendum senectus egestas leo morbi sagittis enim cursus. Lacus conubia elit ornare turpis quam est mi.
                                </p>
                            </div>
                            <div>
                                <img className="w-[744px] rounded-[10px]" src={image} alt="Creating Console" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Pagination */}
                <div className="absolute bottom-[-40px]">
                    <div className="custom-pagination absolute bottom-[-20px] left-[50%] transform -translate-x-1/2"></div>

                </div>
            </Swiper>
        </div>
    );
};

export default CreatingConsole;
