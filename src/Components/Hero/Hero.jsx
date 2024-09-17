import ConsoleAcademy from "../../assets/Hero/ConsoleAcademy.png"
const Hero = () => {
    return (
        <div className="flex items-center justify-center mt-[134px] flex-col mb-[100px] ">
            <img src={ConsoleAcademy} alt="" />
            <p className="w-[723px] text-[36px] font-light text-center">Программируй своё будущее сегодня!
                Первая IT Академия в ГБАО</p>
        </div>
    )
}

export default Hero
