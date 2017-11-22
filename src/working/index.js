import React from 'react'
import './assets/working.css'

class WorkingExperience extends React.Component {
  render() {
    return (
      <div className="row" data-aos="fade-in">
        <h5 className="light jobs-section-title">> describe experience</h5>
        {this.renderJobs()}
      </div>
    )
  }

  renderJobs() {
    return (
      JOBS.map((job, index) => {
        return (
          <div key={`${job.company}_${index}`} className="row job-row">
            {this.renderImage(job)}
            <div className="col s12 l10 m10 job-content">
              <div className="center hide-on-med-and-up">
                {this.renderContent(job)}
                {this.renderSkills(job)}
              </div>
              <div className="hide-on-small-only show-on-medium-and-up">
                {this.renderContent(job)}
                {this.renderSkills(job)}
              </div>
            </div>
          </div>
        )
      })
    )
  }

  renderImage(job) {
    return (
      <div className="col s12 l2 m2 center">
        <img src={job.img} className="circle job-img" alt={job.company}/>
      </div>
    )
  }

  renderContent(job) {
    return (
      <div>
        <b>{job.position}</b> @ 
        <a target="_blank" href={job.href}>
          <span className="light job-title"> {job.company}</span>
        </a>
        <p className="job-date">
          {job.date}
        </p>
      </div>
    )
  }

  renderSkills(job) {
    return (
      <div>
        {
          job.skills.map((skillName, index) => {
            return (
              <div key={`${skillName}_${index}`} className="chip">
                {skillName}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const JOBS = [
  {
    company: "In Loco",
    href: "https://www.inlocomedia.com/",
    img: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA0IAAAAJDg1ODA5YmZmLTEyMTctNDY5My04ZGY2LWIxZTNhZWY1YmRiYQ.png",
    position: "Software Engineer",
    date: "Mar, 2017 - Today",
    skills: ["Java", "React/Redux", "Ruby", "Kafka", "Kubernetes"]
  },
  {
    company: "Suati",
    href: "http://suati.com.br/",
    img: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAXPAAAAJDA4NjU4ZGVhLTU0ZjEtNDVmMC1iM2YxLWNiNzRiNWI1N2VkYg.png",
    position: "Software Engineer Intern",
    date: "Apr, 2015 - Jan, 2016",
    skills: ["C#", "TFS", "Powershell"]
  },
  {
    company: "PET-Informática",
    href: "https://pet-informatica.github.io/",
    img: "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png",
    position: "Member",
    date: "Mar, 2013 - Jan, 2017",
    skills: ["Unity", "HTML", "CSS", "JavaScript"]
  }
]

export default WorkingExperience