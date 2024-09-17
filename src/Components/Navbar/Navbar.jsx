import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav>
            <ul className="font-normal text-[20px] flex items-center justify-center gap-[40px] text-[#000000]">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-[3px] border-[#0085F9] mb-[4px] rounder-[1px] "
                            : ""
                    }
                >
                    <li>{t("Header.home")}</li>
                </NavLink>
                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-[3px] border-[#0085F9] mb-[4px] rounder-[1px] "
                            : ""
                    }
                >
                    <li>{t("Header.courses")}</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-[3px] border-[#0085F9] mb-[4px] rounder-[1px] "
                            : ""
                    }
                >
                    <li>{t("Header.about")}</li>
                </NavLink>
                <NavLink
                    to="/team"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-[3px] border-[#0085F9] mb-[4px] rounder-[1px]  "
                            : ""
                    }
                >
                    <li>{t("Header.team")}</li>
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-[3px] border-[#0085F9] mb-[4px] rounder-[1px] "
                            : ""
                    }
                >
                    <li>{t("Header.projects")}</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
