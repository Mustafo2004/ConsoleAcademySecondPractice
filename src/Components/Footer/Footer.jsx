import instagram from "../../assets/Social/footer_instagram_button.png"
import faceebook from "../../assets/Social/footer_watcapp.png"
import watcapp from "../../assets/Social/footer_facebook_button.png"
import Logo from "../Logo/Logo"
const Footer = () => {
    return (
        <div className=" px-[160px] mt-[200px] py-[100px]">
            <div className="flex items-center justify-center gap-[90px]">
                <img src={instagram} alt="" />
                <img src={faceebook} alt="" />
                <img src={watcapp} alt="" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex justify-start items-start gap-[32px]">
                    <Logo />
                    <p className="font-light text-[16px]">© All Rights Reserved.</p>
                </div>
                <div className="flex items-start justify-center gap-[80px] w-[488px]">
                    <p>itisconsole@gmail.com</p>
                    <p>+992 93 404 4657</p>
                </div>
                <div className="flex items-start justify-center gap-[80px] mt-[80px] w-[347px]">
                    <p>2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
