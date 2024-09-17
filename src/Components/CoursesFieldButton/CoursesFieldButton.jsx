
// eslint-disable-next-line react/prop-types
const CoursesFieldButton = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            <button className="bg-[#0085F9] py-[10px] px-[90px] text-white rounded-[5px]">{children}</button>
        </div>
    )
}

export default CoursesFieldButton
