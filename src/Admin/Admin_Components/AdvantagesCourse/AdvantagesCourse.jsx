import AddminInput from "../AddminInput/AddminInput"
import PropTypes from "prop-types";

const AdvantagesCourse = ({ data, setData }) => {
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <AddminInput
                name="advantage_1"
                type="text"
                value={data.advantages_1}
                placeholder="advantage 1"
                onChange={handleChange}
            />
            <AddminInput
                name="advantage_2"
                type="text"
                value={data.advantages_2}
                placeholder="advantage 2"
                onChange={handleChange}
            />
            <AddminInput
                name="advantage_3"
                type="text"
                value={data.advantages_3}
                placeholder="advantage 3"
                onChange={handleChange}
            />
        </div>
    )
}
AdvantagesCourse.propTypes = {
    data: PropTypes.shape({
        advantages_1: PropTypes.string,
        advantages_2: PropTypes.string,
        advantages_3: PropTypes.string
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

export default AdvantagesCourse
