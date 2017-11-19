import './working.css'
import React from 'react'

class WorkingExperience extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: false
    }

    this.handleHide = this.handleHide.bind(this)
  }

  render() {
    return (
      <div className="row" data-aos="fade-in">
        <h5 className="light jobs-section-title" onClick={this.handleHide}>> describe experience</h5>
        {
          this.state.hidden
          ? <div></div>
          : this.renderJobs()
        }
      </div>
    )
  }

  renderJobs() {
    return (
      JOBS.map((job, index) => {
        return (
          <div key={`${job.company}_${index}`} className="row job-row">
            <div className="col l2 m2 center hide-on-small-only show-on-medium-and-up">
              <img src={job.img} className="circle job-img" alt={job.company}/>
            </div>
            <div className="col s12 left hide-on-med-and-up">
              <img src={job.img} className="circle job-img" alt={job.company}/>
            </div>
            <div className="col s12 l10 m10 job-content">
              {job.position} @ 
              <a target="_blank" href={job.href}>
                <span className="light job-title"> {job.company}</span>
              </a>
              <p className="job-date">
                {job.date}
              </p>
              {this.renderSkills(job)}
            </div>
          </div>
        )
      })
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

  handleHide(event) {
    const currentStatus = this.state.hidden

    this.setState({
      hidden: !currentStatus
    })
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
  },
  {
    company: "Stig",
    href:"#",
    img: "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-1/p200x200/1234371_202650289913726_2141085768_n.png?oh=5ccf850b6b37a54ea3016b201c8abcf8&oe=5A8E3DDD",
    position: "Co-Founder",
    date: "2014-2015",
    skills: ["Objective-C", "Node"]
  }
]

export default WorkingExperience;