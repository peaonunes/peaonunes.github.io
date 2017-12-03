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
  constructor(props) {
    super(props)

    this.state = {
      finishedImporting: false,
      loadingBar: "[===>]",
      counter: 0
    }

    this.tick = this.tick.bind(this)
  }

  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  componentWillMount() {
    AOS.init()
  }

  componentDidMount() {
    this.context.mixpanel.track('page_view')
    this.startLoading()
  }

  render() {
    return (
      <div className="container courier-new">
        {
          this.state.finishedImporting
          ? this.renderContent()
          : this.renderLoaderWrapper()
        }
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        <About />
        <WorkExperience />
        <Projects />
        <Teaching />
        <Education />
        <Footer />
      </div>
    )
  }

  startLoading() {
    if (this.timer == null) {
      this.timer = setInterval(() => this.tick(), 20)
    }
  }

  tick() {
    if (this.state.counter === 1000) {
      this.setState({ finishedImporting: true })
      clearInterval(this.timer)
    } else {
      this.setState({
        counter: this.state.counter + 10,
        loadingBar: this.state.loadingBar.slice(0, 3) + "=" + this.state.loadingBar.slice(3)
      })
    }
  }

  renderLoaderWrapper() {
    return (
      <div className="courier-new loader row">
        <div className="col m12 l12 hide-on-small-only show-on-medium-and-up">
          {this.renderLoading()}
        </div>
        <div className="col s12 hide-on-med-and-up welcome-small">
          {this.renderLoading()}
        </div>
      </div>
    )
  }

  renderLoading() {
    return (
      <div>
        { this.renderWelcome() }
        { this.renderName() }
        <span># {this.state.counter}/1000 useless, but cool, animation loader...</span><br/>
        {this.state.loadingBar}
      </div>
    )
  }

  renderWelcome() {
    return (
      <div className="welcome-subtitle">
        {welcome1}<br />
        {welcome2}<br />
        {welcome3}<br />
        {welcome4}<br />
        {welcome5}<br />
        {welcome6}<br />
      </div>
    )
  }

  renderName() {
    return (
      <div>
        {str1}<br />
        {str2}<br />
        {str3}<br />
        {str4}<br />
        {str5}<br />
      </div>
    )
  }
}

export default App

const str1 = "     ____        ____           __   _   __                     "
const str2 = "    / __ |____ _/ __/___ ____  / /  / | / /_  ______  ___  _____"
const str3 = "   / /_/ / __ `/ /_/ __ `/ _ |/ /  /  |/ / / / / __ |/ _ |/ ___/"
const str4 = "  / _, _/ /_/ / __/ /_/ /  __/ /  / /|  / /_/ / / / /  __(__  ) "
const str5 = " /_/ |_||__,_/_/  |__,_/|___/_/  /_/ |_/|__,_/_/ /_/|___/____/  "

const welcome1 = "                __                             __      "
const welcome2 = " _      _____  / /________  ____ ___  ___     / /_____ "
const welcome3 = "| | /| / / _ |/ / ___/ __ |/ __ `__ |/ _ |   / __/ __ |"
const welcome4 = "| |/ |/ /  __/ / /__/ /_/ / / / / / /  __/  / /_/ /_/ /"
const welcome5 = "|__/|__/|___/_/|___/|____/_/ /_/ /_/|___/   |__/|____/ "
const welcome6 = "                                                       "