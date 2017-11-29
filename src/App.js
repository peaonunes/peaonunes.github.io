import '../node_modules/aos/dist/aos.css' 
import WorkExperience from './working'
import Education from './education'
import Projects from './projects'
import Teaching from './teaching'
import Footer from './footer'
import About from './about'
import AOS from 'aos'
import './App.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  componentWillMount() {
    AOS.init()
  }

  componentDidMount() {
    this.context.mixpanel.track('page_view')
  }

  render() {
    return (
      <div className="container">
        <About />
        <WorkExperience />
        <Projects />
        <Teaching />
        <Education />
        <Footer />
      </div>
    )
  }
}

export default App
