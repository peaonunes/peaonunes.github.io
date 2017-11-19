import cusparallesets from './assets/customizable-prallel-sets.gif'
import dadosabertosrecife from './assets/dadosabertosrecife.png'
import colormatches from './assets/colormatches.gif'
import swiftcity from './assets/swiftcity.png'
import cinquest from './assets/cinquest.png'
import './assets/projects.css'
import React from 'react'

class Projects extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      limit: 5
    }

    this.handleChangeLimit = this.handleChangeLimit.bind(this)
  }

  render() {
    const ARRAY_FIRST_POSITION = 0

    return (
      <div className="row">
        <div className="row" style={{"fontFamily": "Courier New"}}>
          <div className="col s10 m10 l4 projects-section-title">
            <h5 className="light">> show projects -n=</h5>
          </div>
          <div className="col s1 m1 l1 left projects-limit-wrapper">
            <input type="number" className="projects-limit-input" value={this.state.limit} onChange={this.handleChangeLimit}/>
          </div>
        </div>
        {
          PROJECTS.slice(ARRAY_FIRST_POSITION, this.state.limit).map((project, index) => {
            return (
              <div key={`${project.name}_${index}`} className="row project-row" data-aos="fade-in">
                {this.renderImage(project)}
                <div className="col s12 l10 m10 project-content">
                  {this.renderContent(project)}
                  {this.renderSkills(project)}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderImage(project) {
    return (
      <div>
        <div className="col l2 m2 center hide-on-small-only show-on-medium-and-up">
          <img src={project.img} className="circle project-img" alt={project.company}/>
        </div>
        <div className="col s12 left hide-on-med-and-up">
          <img src={project.img} className="circle project-img" alt={project.company}/>
        </div>
      </div>
    )
  }

  renderContent(project) {
    return (
      <div>
        <p className="project-description">
          {project.name}, {project.date} • 
          {this.renderProjectLink(project.website, "Website", "fa fa-link")}
          {this.renderProjectLink(project.repository, "Github", "fa fa-github")}
          {this.renderProjectLink(project.paper, "Paper", "fa fa-file-text")}
          {this.renderProjectLink(project.poster, "Poster", "fa fa-file-image-o")}
          <br/>
          {project.description}
        </p>
      </div>
    )
  }

  renderProjectLink(link, name, icon) {
    if (link) {
      return (
        <span className="project-link-wrapper">
          <a href={link} className="project-icon" target="_blank">
            <i className={`${icon}`} aria-hidden="true"></i> {name}
          </a>
        </span>
      )
    }
  }

  renderSkills(project) {
    return (
      <div>
        {
          project.skills.map((skillName, index) => {
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

  handleChangeLimit(event) {
    event.preventDefault()
    if (event.target.value !== 0) {
      this.setState({
        limit: event.target.value
      })
    }
  }
}

const PROJECTS = [
  {
    name: "Customizable Parallel Sets",
    description: "Open source plug and play Dashboard to load .csv and .json files and visualize the data using Parallel Sets.",
    website: "https://peaonunes.github.io/customizable-parallel-sets/",
    repository: "https://github.com/peaonunes/customizable-parallel-sets",
    img: cusparallesets,
    date: "2017",
    skills: ["NodeJS", "Redux", "d3.js"]
  },
  {
    name: "SwiftCity",
    description: "Visualizating Swift Systems as 3D cities. Graduation project under the tutorship of Prof. Fernando Castor.",
    website: "https://swiftcity.github.io/",
    repository: "https://github.com/swiftcity",
    paper: "http://peaonunes.github.io/files/ABSTRACT-PAPER.pdf",
    poster: "http://peaonunes.github.io/files/POSTER-SWIFTCITY.pdf",
    img: swiftcity,
    date: "2016",
    skills: ["Three.js", "d3.js", "HTML", "CSS"]
  },
  {
    name: "CInQuest",
    description: "PET-Informática project, RPG Game based on Unity to help freshers deal with their firsts challenges at CS department.",
    website: "https://pet-informatica.github.io/cinquest/",
    repository: "https://github.com/pet-informatica/CinQuest",
    img: cinquest,
    date: "2015-2016",
    skills: ["Unity", "C#", "HTML", "CSS"]
  },
  {
    name: "Recife's Municipal Education Visualization",
    description: "Data Visualization final project about Recife's Education, exploring open data to visualize schools facilities and performance.",
    website: "https://peaonunes.github.io/edurec-vis-visualizacao-2016-2/",
    repository: "https://github.com/peaonunes/edurec-vis-visualizacao-2016-2",
    img: dadosabertosrecife,
    date: "2016",
    skills: ["d3.js", "HTML", "CSS", "JavaScript"]
  },
  {
    name: "Color Matches",
    description: "Swift game to answer if the color matches the previous color shown.",
    repository: "https://github.com/peaonunes/color-matches",
    img: colormatches,
    date: "2016",
    skills: ["Swift"]
  },
  {
    name: "NN Breast Cancer Detection",
    description: "Neural Networks final project. Focusing on achieve its best performance applied to a breast cancer detection database.",
    repository: "https://github.com/peaonunes/neural-networks-project",
    img: "http://peaonunes.github.io/imgs/neural.png",
    date: "2016",
    skills: ["Neural Netowrks", "Matlab", "Python"]
  },
  {
    name: "Software Inspection (not published)",
    description: "Research of Software Inspection under a Theoretical look, Enterprise usage and Software Quality.",
    paper: "http://bit.ly/InspecaodeSoftware",
    img: "http://peaonunes.github.io/imgs/costumer.png",
    date: "2016",
    skills: ["Software Quality", "Software Inspection"]
  },
  {
    name: "Complaints Mining (not published)",
    description: "A Data Mining Approach for Evaluating the Solution of Costumer Complaints, final Decision and Data Mining Support Systems project.",
    paper: "http://bit.ly/DataManing-CostumersComplaints",
    img: "http://peaonunes.github.io/imgs/costumer.png",
    date: "2015",
    skills: ["KNIME", "Python", "Data Mining"]
  }
]

export default Projects;