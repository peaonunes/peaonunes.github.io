import '../node_modules/aos/dist/aos.css'; 
import React, { Component } from 'react';
import WorkExperience from './working';
import About from './about';
import AOS from 'aos';
import './App.css';

class App extends Component {
  componentWillMount() {
    AOS.init()
  }

  render() {
    return (
      <div className="container">
        <About />
        <WorkExperience />
      </div>
    );
  }
}

export default App;
