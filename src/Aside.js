import React from 'react';
import bingoLogo from './Bingo.jpg';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Collapse from './Collapse';
import './App.css';

function Aside() {
  return (
    <div className="right-section">
      <Container className="pa-46" max-width="sm">
        <img src={bingoLogo} className="App-logo" alt="Bingo Logo" />
        <Typography className="coverage" variant="h6">
          You have great coverage
        </Typography>
        <Typography className="coverage-text" variant="body1" align="left">
          $100,000 in protection<br/>
          80% reimburesement
        </Typography>
        <Collapse></Collapse>
      </Container>
    </div>
  );
}

export default Aside;
