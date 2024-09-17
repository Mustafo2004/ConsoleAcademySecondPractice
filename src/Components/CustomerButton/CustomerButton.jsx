import { BiPlus } from "react-icons/bi";
import styles from "./CusomerButton.module.css";

// eslint-disable-next-line react/prop-types
const CustomerButton = ({ children, className }) => {
    return (
        <div className="flex items-center justify-center">
            <button className={`${className} flex items-center gap-[2px] justify-center py-[10px]  text-[#ffffff] bg-[#0085F9]  rounded-[5px] px-[90px]  ${styles.button}`}>
                <BiPlus className={styles.icon} />
                <span>{children}</span>
            </button>
        </div>
    );
};

export default CustomerButton;
