
// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-[48px]">{children}</h1>
        </div>
    )
}

export default Title
