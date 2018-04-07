import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import HeroImage from './components/HeroImage/HeroImage';
import SearchDoctors from './components/SearchDoctors/SearchDoctors';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroImage />
        <SearchDoctors />
      </div>
    );
  }
}

export default App;
