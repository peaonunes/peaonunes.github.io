import '../node_modules/aos/dist/aos.css' 
import React, { Component } from 'react'
import WorkExperience from './working'
import Projects from './projects'
import Teaching from './teaching'
import About from './about'
import AOS from 'aos'
import './App.css'

class App extends Component {
  componentWillMount() {
    AOS.init()
  }

  render() {
    return (
      <div className="container">
        <About />
        <WorkExperience />
        <Projects />
        <Teaching />
      </div>
    )
  }
}

export default App
