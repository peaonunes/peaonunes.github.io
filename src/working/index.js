import "./assets/working.css";

import React from "react";
import PropTypes from "prop-types";

class WorkingExperience extends React.Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="row" data-aos="fade-in">
        <h5 className="light courier-new">> describe experience</h5>
        {this.renderJobs()}
      </div>
    );
  }

  renderJobs() {
    return JOBS.map((job, index) => {
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
      );
    });
  }

  renderImage(job) {
    return (
      <div className="col s12 l2 m2 center">
        <img src={job.img} className="circle job-img" alt={job.company} />
      </div>
    );
  }

  renderContent(job) {
    return (
      <div>
        <b>{job.position}</b> @
        <a
          target="_blank"
          href={job.href}
          onClick={e => this.trackClick(e, job.href, job.company)}
        >
          <span className="light job-title"> {job.company}</span>
        </a>
        <p className="job-date">{job.date}</p>
      </div>
    );
  }

  trackClick(event, href, company) {
    this.context.mixpanel.track("job_link_clicked", {
      link: href,
      company: company
    });
  }

  renderSkills(job) {
    return (
      <div>
        {job.skills.map((skillName, index) => {
          return (
            <div key={`${skillName}_${index}`} className="chip">
              {skillName}
            </div>
          );
        })}
      </div>
    );
  }
}

const JOBS = [
  {
    company: "In Loco",
    href: "https://www.inlocomedia.com/",
    img:
      "https://media.licdn.com/dms/image/C4D0BAQG5mtNrU_4i_g/company-logo_200_200/0?e=1544054400&v=beta&t=UcJt01JxWB5KUPtYZl335ikDH-Mve8oASSFt4VMiONg",
    position: "Software Engineer",
    date: "Mar, 2017 - Today",
    skills: [
      "Java",
      "React/Redux",
      "Ruby",
      "Kafka",
      "Kubernetes",
      "GraphQL",
      "GRPC"
    ]
  },
  {
    company: "Suati",
    href: "http://suati.com.br/",
    img:
      "https://media.licdn.com/dms/image/C560BAQE2dSRxRwjGNA/company-logo_400_400/0?e=1544054400&v=beta&t=VIpw3QkLT2DgA0uHeH9MjFAgx4G6U__7Q2tgm0LkiFM",
    position: "Software Engineer Intern",
    date: "Apr, 2015 - Jan, 2016",
    skills: ["C#", "TFS", "Powershell"]
  },
  {
    company: "PET-Informática",
    href: "https://pet-informatica.github.io/",
    img:
      "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png",
    position: "Member",
    date: "Mar, 2013 - Jan, 2017",
    skills: ["Unity", "HTML", "C#", "CSS", "JavaScript"]
  }
];

export default WorkingExperience;
