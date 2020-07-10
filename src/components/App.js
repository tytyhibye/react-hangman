import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import Header from "./Header";
import GameControl from './GameControl';
import { Container } from 'reactstrap';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <GameControl/>
      </Container>
    </React.Fragment>
  );
}

export default App;
