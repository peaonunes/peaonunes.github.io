import React from 'react'
import PropTypes from 'prop-types'

import './assets/education.css'

import Universities from './Universities'
import Articles from './Articles'
import Certifications from './Certifications'

class Education extends React.Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="row">
        <h5 className="light courier-new">> list education</h5>
        <div className="education-row">
          <div className="col s12 m6 l6 universities-margin">
            <Universities />
          </div>
          <div className="col s12 m6 l6">
            <div className="row">
              <Articles onClick={this.trackClick} />
              <Certifications onClick={this.trackClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  trackClick(_, href, name) {
    this.context.mixpanel.track('education_link_clicked', {
      link: href,
      name: name
    })
  }
}

export default Education
