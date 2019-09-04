import photo from './assets/photo.jpeg'
import './assets/about.css'

import React from 'react'
import PropTypes from 'prop-types'
import ContactBadge from './ContactBadge'

class About extends React.Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m2 l2 center">
          <img
            src={photo}
            className="circle personal-img pointer-cursor tooltipped"
            alt="future-easter-egg"
            title="I am going to rewrite this with Gatsby someday!"
          />
        </div>
        <div className="col s12 m10 l10">
          <h4 className="light about-header">Hi there, I'm Rafael Nunes.</h4>
          <p className="about-text">
            Looking forward to collaborate with projects that generates impact!
          </p>
          <div className="row">
            {CONTACTS.map((contact, index) => {
              return (
                <div key={`${contact.title}_${index}`}>
                  <div className="col m1 l1 hide-on-small-only show-on-medium-and-up">
                    <ContactBadge contact={contact} onClick={this.trackClick} />
                  </div>
                  <div className="col s3 hide-on-med-and-up">
                    <ContactBadge contact={contact} onClick={this.trackClick} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  trackClick(_, href) {
    this.context.mixpanel.track('contact_link_clicked', {
      link: href
    })
  }
}

const CONTACTS = [
  {
    title: 'My posts on Medium!',
    href: 'https://medium.com/@peaonunes',
    icon: 'fab fa-medium'
  },
  {
    title: 'My posts on Dev.to!',
    href: 'https://dev.to/peaonunes',
    icon: 'fab fa-dev'
  },
  {
    title: 'Some code on Github!',
    href: 'https://github.com/peaonunes',
    icon: 'fab fa-github'
  },
  {
    title: 'My thoughts on Tweeter!',
    href: 'https://twitter.com/peaonunes',
    icon: 'fab fa-twitter'
  },
  {
    title: 'My resume on Linkedin!',
    href: 'https://www.linkedin.com/in/rngds',
    icon: 'fab fa-linkedin'
  },
  {
    title: 'Email me!',
    href: 'mailto:rafaelngds@gmail.com',
    icon: 'fa fa-envelope'
  }
]

export default About
