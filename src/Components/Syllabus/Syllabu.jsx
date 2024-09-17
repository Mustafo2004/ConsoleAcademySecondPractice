import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Syllabus.module.css"
import { ArrowUpward } from '@mui/icons-material';
const Syllabus = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    // const lng = localStorage.getItem("i18nextLng");
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <div>
                {
                    item.en.sullabus.map((item) => {
                        return (
                            <Accordion key={item.id}
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
                                            {item.title}
                                        </p>
                                    </Typography>
                                    <AccordionDetails className={styles.accordionDetails}>
                                        <Typography>
                                            <p>
                                                {item.description}
                                            </p>
                                        </Typography>
                                    </AccordionDetails>
                                </AccordionSummary>
                            </Accordion>

                        )
                    })
                }
            </div>

        </div>
    )
}
Syllabus.propTypes = {
    item: PropTypes.object,
};
export default Syllabus
