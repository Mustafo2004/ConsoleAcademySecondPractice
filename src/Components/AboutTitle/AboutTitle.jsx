
// eslint-disable-next-line react/prop-types
const AboutTitle = ({ children, className }) => {
    return (
        <div>
            <h1 className={` font-normal text-[48px] ${className}`}>{children}</h1>
        </div >
    )
}

export default AboutTitle
