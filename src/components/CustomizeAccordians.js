import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Hm from "../assets/hm.jpg"
import Ms from "../assets/ms.jpg"
import Ds from "../assets/ds.png"
import Nc from "../assets/nc.jpg"
import Ps from "../assets/ps.jpg"
import Msc from "../assets/msc.jpg"
import Cm from "../assets/cm.jpg"
import Hsc from "../assets/hsc.jpg"
import Es from "../assets/es.jpg"
import PP from "../assets/pp.jpg"
import SectionTitle from '../Common/SectionTitle';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='flex flex-col gap-4'>
            <SectionTitle title="Fee Structure" para="Explore Fees" />
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Hospitality Management and Culinary Arts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Hm} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Medical Sciences</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Ms} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Dental Sciences</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Ds} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Riphah Nursing College</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Nc} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Pharmaceutical Sciences</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Ps} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Media Sciences</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Msc} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Faculty of Computing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Cm} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">FACULTY OF ENGINEERING & APPLIED SCIENCES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Es} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Faculty of Rehabilitation and Allied Health Sciences(FRAHS)  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Hsc} alt='' />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                    <Typography sx={{ fontFamily: "Playfair Display" }} className=" !font-bold !custonFonts !text-bgColor">Public Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={PP} alt='' />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
