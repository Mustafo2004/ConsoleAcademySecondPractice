import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { ArrowUpward } from "@mui/icons-material";
import { FAQ } from "../../Data/Data"
import { useState } from "react";
import styles from "./FaqList.module.css"
// import useFetch from "../../Hooks/Fetching";

const FaqList = () => {
    const [expanded, setExpanded] = useState(false);
    // const { data, loading, error } = useFetch("http://127.0.0.1:2442/faq/get")
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error:{error.message}</p>
    const lng = localStorage.getItem("i18nextLng");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="px-[264px] pb-[402px]">
            {
                FAQ.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                    >
                        <AccordionSummary
                            expandIcon={
                                <span className={`${styles.iconRotate} ${expanded === item.id ? styles.iconRotateExpanded : ''}`}>
                                    {expanded === item.id ? <CloseIcon /> : <ArrowUpward />}
                                </span>
                            }
                            aria-controls={`${item.id}-content`}
                            id={`${item.id}-header`}
                            className="h-[110px]"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <p className='font-semibold text-[23.16px]'>

                                    {lng === "ru" ? item.ru.title : item.en.title}
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <Typography>
                                <p>

                                    {lng === "ru" ? item.ru.description : item.en.description}
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}

export default FaqList;
