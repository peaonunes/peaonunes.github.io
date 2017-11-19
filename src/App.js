import React, { Component } from 'react';
import WorkExperience from './WorkingExperience';
import photo from './images/photo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {intro()}
        <WorkExperience />
      </div>
    );
  }
}

const intro = () => {
  return (
    <div className="row">
      <div className="col s12 m2 l2">
        <img className="circle personal-image" src={photo} />
      </div>
      <div className="col s12 m10 l10">
        <h4 className="light">Hi there, I'm Rafael Nunes.</h4>
        <p>
          I'm currently a Software Engineer @ In Loco.
        </p>
        <p>
          I'm always looking forward to build and to work on projects that makes the difference!
          I love Innovation and I try to play around with web apps, data science, software engeneering (...) and sometimes I even take risk on writing.
        </p>
      </div>
    </div>
  )
}

export default App;
