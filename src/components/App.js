import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import Header from "./Header";
import GameControl from './GameControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GameControl/>
    </React.Fragment>
  );
}

export default App;
