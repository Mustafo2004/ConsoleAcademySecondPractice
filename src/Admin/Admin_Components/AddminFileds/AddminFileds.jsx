import PropTypes from "prop-types";
import AddminInput from "../AddminInput/AddminInput";

const AddminFileds = ({ data, setData }) => {
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center flex-col gap-5">
            <AddminInput
                name="coursesName"
                type="text"
                value={data.coursesName}
                placeholder="Course name"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesInfo"
                type="text"
                value={data.coursesInfo}
                placeholder="Course info"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesData"
                type="text"
                value={data.coursesData}
                placeholder="Course data"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesDuration"
                type="text"
                value={data.coursesDuration}
                placeholder="Course duration"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesStatus"
                type="text"
                value={data.coursesStatus}
                placeholder="Course status"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesLevel"
                type="text"
                value={data.coursesLevel}
                placeholder="Course level"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesAgeFilter"
                type="text"
                value={data.coursesAgeFilter}
                placeholder="Age filter"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesPrice"
                type="text"
                value={data.coursesPrice}
                placeholder="Course price"
                onChange={handleChange}
            />
        </div>
    );
};

// PropTypes validation
AddminFileds.propTypes = {
    data: PropTypes.shape({
        coursesName: PropTypes.string,
        coursesInfo: PropTypes.string,
        coursesData: PropTypes.string,
        coursesDuration: PropTypes.string,
        coursesStatus: PropTypes.string,
        coursesLevel: PropTypes.string,
        coursesAgeFilter: PropTypes.string,
        coursesPrice: PropTypes.string,
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

// Default props
AddminFileds.defaultProps = {
    data: {
        coursesName: "",
        coursesInfo: "",
        coursesData: "",
        coursesDuration: "",
        coursesStatus: "",
        coursesLevel: "",
        coursesAgeFilter: "",
        coursesPrice: "",
    },
};

export default AddminFileds;
