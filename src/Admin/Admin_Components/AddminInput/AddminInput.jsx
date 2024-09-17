import PropTypes from "prop-types";

const AddminInput = ({ type, className, placeholder, value, onChange, name, dataLang }) => {
    return (
        <div>
            <input
                type={type}
                className={`${className} bg-[#D9D9D9] pl-[20px] w-[475px] h-[83px]`}
                value={type === "file" ? undefined : value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                data-lang={dataLang} // Ensure data-lang is passed
            />
        </div>
    );
};

// PropTypes validation
AddminInput.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    dataLang: PropTypes.string, // Add dataLang prop
};

// Default props in case no value is passed
AddminInput.defaultProps = {
    className: "",
    placeholder: "",
    value: "",
    dataLang: "", // Default value for dataLang
};

export default AddminInput;
