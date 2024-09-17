
// eslint-disable-next-line react/prop-types
const Title = ({ children, className }) => {
    return (
        <div className="flex items-center justify-center">
            <h1 className={`text-[48px] font-normal text-[#1D192B] ${className}`}>
                {children}
            </h1>
        </div>
    )
}

export default Title
