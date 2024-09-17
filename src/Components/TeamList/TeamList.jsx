import { Team } from "../../Data/Data"
import instagram from "../../assets/Social/instagram.png"
import linkln from "../../assets/Social/in.png"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const TeamList = () => {
    const lng = localStorage.getItem("i18nextLng")

    return (
        <div className="grid-cols-[repeat(auto-fill,minmax(378px,1fr))] grid gap-[22px] ">
            <Swiper
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=" w-[1840px]"
            >
                {
                    Team.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className="w-[376px] h-[470px] p-[20px] mt-[50px] rounded-[10px] border-[2px] border-black flex items-centerp-[15px] flex-col">
                                    <img className="bg-[#FFD503] rounded-[10px] border-[2px] border-black bg-center w-[345px]" src={item.image} alt="" />
                                    <div className="px-[20px] mt-[10px]">
                                        <div>

                                            <h1 className="text-[#5F6073] font-bold text-[20px]">  {lng == "ru" ? item.ru.name : item.en.name}</h1>
                                            <p className="text-[18px]  font-normal">{lng == "ru" ? item.ru.position : item.en.position}</p>
                                        </div>
                                        <div className="flex mt-[0.7px] justify-start items-center gap-5">
                                            <img src={instagram} alt="" />
                                            <img src={linkln} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default TeamList
