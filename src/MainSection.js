import React from 'react';
import picture from './Bingo-picture.jpg';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './App.css';

const useStyles = makeStyles({
  tabsRoot: {
    maxWidth: 718,
    textAlign: "center",
    margin: "auto"
  },
  tabPanel: {
    maxWidth: 764,
    margin: "auto",
    textAlign: "left",
  },
  tab: {
    color: "#b9c1c6"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function MainSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main-section">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        className={classes.tabsRoot}
        variant="fullWidth"
      >
        <Tab className={classes.tab} label="YOUR QUOTE" />
        <Tab className={classes.tab} label="FINAL TOUCHES" />
        <Tab className={classes.tab} label="WELCOME TO BINGO" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Your Quote
      </TabPanel>
      <TabPanel value={value} index={1}>
        Final Touches
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <span className="tabPanel-header" >
          Woof! You are a part of something special!<br/><br/>
        </span>
        <span className="tabPanel-text">
          Thank you for signing up with Bingo and protecting your pup.<br/>
          If you need any help, please contact us at: <strong>support@joinbingo.co</strong><br/><br/>
          As a reminder, your coverage takes effect after a 3 day waiting period.<br/>
          When a claim does arrise, please email the vet bill to: <strong>claims@joinbingo.co</strong>
          <br/><br/>
          Don't worry, we will send your policy document, claims instructions, and more to the email you provided us.
        </span>
      </TabPanel>
      <img src={picture} className="image1" alt="bingo" />
    </div>
  );
}

export default MainSection;
