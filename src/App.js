import React, { Component } from 'react';
import Header from './includes/Header';
import Banner from './banner/Banner';
import About from './about/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './includes/Menu.css';
import './banner/Banner.css';
import './about/About.css';
import './Style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
