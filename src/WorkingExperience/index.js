import React from 'react'

class WorkingExperience extends React.Component {
  render() {
    return (
      <div className="row">
        <h5 className="light">Working Experience</h5>
        {
          JOBS.map((job, index) => {
            return (
              <div className="row job-row">
                <div className="col l2 m2 center hide-on-small-only show-on-medium-and-up">
                  <img src={job.img} className="circle job-img" />
                </div>
                <div className="col s12 left hide-on-med-and-up">
                  <img src={job.img} className="circle job-img" />
                </div>
                <div className="col s12 l10 m10">
                  {job.position} @ 
                  <a target="_blank" href={job.href}>
                    <span className="light job-title"> {job.company}</span>
                  </a>
                  <p>
                    {job.date}
                  </p>
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

export default WorkingExperience;