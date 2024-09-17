import { useState } from "react";
import AddminInput from "../AddminInput/AddminInput";

// eslint-disable-next-line react/prop-types
const AddingFile = ({ onFileChange }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
            if (onFileChange) {
                onFileChange(e.target.files[0]);
            }
        }
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="w-[1085px] h-[256px] bg-[#D9D9D9] flex items-center justify-center gap-2">
                <p className="font-medium text-[45px]">Add Photo</p>
                <AddminInput
                    type="file"
                    onChange={handleFileChange}
                />
                {fileName && <p>{fileName}</p>} {/* Show file name if selected */}
            </div>
        </div>
    );
};

export default AddingFile;
