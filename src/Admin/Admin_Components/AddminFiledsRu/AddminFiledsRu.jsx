import PropTypes from "prop-types";
import AddminInput from "../AddminInput/AddminInput";

const AddminFiledsRu = ({ data, setData }) => {
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center flex-col gap-5">
            <AddminInput
                name="coursesName"
                type="text"
                value={data.coursesName}
                placeholder="Название курса"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesInfo"
                type="text"
                value={data.coursesInfo}
                placeholder="Информация о курсе"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesData"
                type="text"
                value={data.coursesData}
                placeholder="Данные курса"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesDuration"
                type="text"
                value={data.coursesDuration}
                placeholder="Длительность курса"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesStatus"
                type="text"
                value={data.coursesStatus}
                placeholder="Статус курса"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesLevel"
                type="text"
                value={data.coursesLevel}
                placeholder="Уровень курса"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesAgeFilter"
                type="text"
                value={data.coursesAgeFilter}
                placeholder="Возрастной фильтр"
                onChange={handleChange}
            />
            <AddminInput
                name="coursesPrice"
                type="text"
                value={data.coursesPrice}
                placeholder="Цена курса"
                onChange={handleChange}
            />
        </div>
    );
};

// PropTypes validation
AddminFiledsRu.propTypes = {
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

export default AddminFiledsRu;
