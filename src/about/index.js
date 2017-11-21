import photo from './assets/photo.png';
import './assets/about.css';
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col m2 l2 hide-on-small-only show-on-medium-and-up">
          <img src={photo} className="circle personal-img" alt="future-easter-egg" />
        </div>
        <div className="col s12 center hide-on-med-and-up">
          <img src={photo} className="circle personal-img" alt="future-easter-egg" />
        </div>
        <div className="col s12 m10 l10">
          <h4 className="light">Hi there, I'm Rafael Nunes.</h4>
          <p>
            Looking forward to build and to work on projects that makes the difference!
            <br/>
            I love innovating and playing around with webapps, data science, visualization, software engeneering...
            <br/>
            And sometimes I even take risk on writing.
          </p>
          {this.renderContactInfo()}
        </div>
      </div>
    )
  }

  renderContactInfo() {
    return (
      <div>
        {
          contactInfo.map((contactMethod, index) => {
            return (
              <div className="col s1 m1 l1" key={`${contactMethod.title}_${index}`}>
                <a title={contactMethod.title} href={contactMethod.href} className="contact-a" target="_blank">
                  <i className={`${contactMethod.icon} contact-icon`} aria-hidden="true"></i>
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const contactInfo = [
  {
    title: "My posts on Medium!",
    href: "https://medium.com/@peaonunes",
    icon: "fa fa-medium"
  },
  {
    title: "Some code on Github!",
    href: "https://github.com/peaonunes",
    icon: "fa fa-github"
  },
  {
    title: "My resume on Linkedin!",
    href: "https://www.linkedin.com/in/rngds",
    icon: "fa fa-linkedin-square"
  },
  {
    title: "Email me!",
    href: "mailto:rafaelngds@gmail.com",
    icon: "fa fa-envelope"
  }
]

export default About;