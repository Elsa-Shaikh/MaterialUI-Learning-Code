import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

const AccordionComp = () => {

const [expanded, setExpanded] = useState(false)
const handleChange = (isExpanded,panel)=>{
     
    setExpanded(isExpanded? panel: false);
}

return (
    <Box width='300px' m='30px'>
    <Accordion expanded={expanded==='panel1'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel1')}>
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolores, numquam nulla dolore eius tempore omnis exercitationem temporibus repudiandae rerum?</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded==='panel2'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel2')}>
        <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolores, numquam nulla dolore eius tempore omnis exercitationem temporibus repudiandae rerum?</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded==='panel3'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel3')}>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolores, numquam nulla dolore eius tempore omnis exercitationem temporibus repudiandae rerum?</Typography>
        </AccordionDetails>
    </Accordion>

    </Box>
  )
}

export default AccordionComp