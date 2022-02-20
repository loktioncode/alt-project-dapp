import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accordions({number, title, children}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <Accordion expanded={expanded === `panel${number}`} onChange={handleChange(`panel${number}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${number}bh-content`}
          id={`panel${number}bh-header`}
        >
          <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}


export default Accordions

