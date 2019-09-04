import React from 'react'
import PropTypes from 'prop-types'

import inloco from './assets/inloco.png'
import suati from './assets/suati.png'
import stig from './assets/stig.png'
import './assets/working.css'

import Skills from './../common/Skills'

import Content from './Content'
import Image from '../common/Image'

class WorkingExperience extends React.Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="row" data-aos="fade-in">
        <h5 className="light courier-new">> describe experience</h5>
        {JOBS.map((job, index) => {
          return (
            <div key={`${job.company}_${index}`} className="row job-row">
              <Image src={job.img} alt={job.company} />
              <div className="col s12 l10 m10 job-content">
                <div className="center hide-on-med-and-up">
                  <Content
                    onClick={this.trackClick}
                    position={job.position}
                    href={job.href}
                    period={job.period}
                    company={job.company}
                  />
                  <Skills skills={job.skills} />
                </div>
                <div className="hide-on-small-only show-on-medium-and-up">
                  <Content
                    onClick={this.trackClick}
                    position={job.position}
                    href={job.href}
                    period={job.period}
                    company={job.company}
                  />
                  <Skills skills={job.skills} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  trackClick = (_, href, company) => {
    this.context.mixpanel.track('job_link_clicked', {
      link: href,
      company: company
    })
  }
}

const JOBS = [
  {
    company: 'In Loco',
    href: 'https://www.inloco.com.br',
    img: inloco,
    position: 'Software Engineer & Frontend Chapter Lead',
    period: 'Mar, 2017 - Aug, 2019',
    skills: [
      'React',
      'GraphQL',
      'Ruby on Rails',
      'Java',
      'Kubernetes',
      'Kafka',
      'gRPC'
    ]
  },
  {
    company: 'Suati',
    href: 'http://suati.com.br/',
    img: suati,
    position: 'Software Engineer Intern',
    period: 'Apr, 2015 - Jan, 2016',
    skills: ['C#', 'TFS', 'Powershell']
  },
  {
    company: 'PET-Informática',
    href: 'https://pet-informatica.github.io/',
    img:
      'https://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png',
    position: 'Member',
    period: 'Mar, 2013 - Jan, 2017',
    skills: ['Unity', 'HTML', 'C#', 'CSS', 'JavaScript']
  },
  {
    company: 'Sig App',
    img: stig,
    position: 'Project Manager & Co-Founder',
    period: 'Jan, 2013 - Apr, 2014',
    skills: ['Scrum', 'Lean Startup']
  }
]

export default WorkingExperience
