import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './App.css';

const Accordion = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgb(248, 250, 251)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 57,
    '&$expanded': {
      minHeight: 57,
    },
    padding: "0"
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "block",
    padding: "18px 0",
    color: "#959a9c",
    width: 301,
    backgroundColor: "rgb(248, 250, 251)"
  },
}))(MuiAccordionDetails);

export default function Collapse() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="caption">Key Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordionDetails" align="left">
            <b>Visit any licensed U.S. vet</b><br/>
            <small>Submit a vet bill for reimbrusement</small><br/>
            <small>We strive to approve claims in 72 hours</small><br/>
          </Typography>
          <Typography align="left">
            <b>We cover accidents & illnesses</b><br/>
            <small>There is a three day waiting period</small><br/>
            <small>Our deductibless are annual</small><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography variant="caption">What's Covered</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography variant="caption">What's Not Convered</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
