import React from 'react';
import MainSection from './MainSection';
import Aside from './Aside';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxwidth="false">
        <MainSection></MainSection>
        <Aside></Aside>
      </Container>
    </div>
  );
}

export default App;
