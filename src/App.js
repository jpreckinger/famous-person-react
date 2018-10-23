import React, { Component } from 'react';
import Header from './components/Header/Header';
import FamousPerson from './components/FamousPerson/FamousPerson';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
