
// eslint-disable-next-line react/prop-types
const CoursesFieldTitl = ({ children, className }) => {
    return (
        <div>
            <h1 className={`font-normal text-[24px] mt-[50px] ${className}`}>{children}</h1>
        </div>
    )
}

export default CoursesFieldTitl
