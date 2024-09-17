
// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, className }) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} value={value} className={`${className} h-[50px] rounded-[5px] border-[2px] border-[#000000] px-[30px] py-[8,25px] `} />
        </div>
    )
}

export default Input
