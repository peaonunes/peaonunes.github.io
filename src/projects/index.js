import dadosabertosrecife from './assets/dadosabertosrecife.png'
import cusparallesets from './assets/parallel-sets.png'
import colormatches from './assets/colormatches.gif'
import inspection from './assets/inspection.jpg'
import datamining from './assets/datamining.jpg'
import swiftcity from './assets/swiftcity.png'
import cinquest from './assets/cinquest.png'
import neural from './assets/neural.png'

import './assets/projects.css'
import React from 'react'
import AOS from 'aos'
import PropTypes from 'prop-types'

class Projects extends React.Component {
  static contextTypes = {
    mixpanel: PropTypes.object.isRequired
  }

  constructor(props){
    super(props)

    this.state = {
      projectsNumber: LIMIT_FLOOR
    }

    this.handleChangeLimit = this.handleChangeLimit.bind(this)
  }

  componentWillUpdate() {
    AOS.refreshHard()
  }

  render() {
    return (
      <div className="row">
        <div className="row courier-new">
          <div className="col s10 m10 l4 projects-section-title">
            <h5 className="light">> show projects -n=</h5>
          </div>
          <div className="col s1 m1 l1 left projects-limit-wrapper">
            <input type="number" className="projects-limit-input" value={this.state.projectsNumber} onChange={this.handleChangeLimit}/>
          </div>
        </div>
        {
          PROJECTS.slice(ARRAY_FIRST_POSITION, this.getLastPosition()).map((project, index) => {
            return (
              <div key={`${project.name}_${index}`} className="row project-row" data-aos="fade-up">
                {this.renderImage(project)}
                <div className="col s12 center hide-on-med-and-up project-content">
                  {this.renderContent(project)}
                  {this.renderSkills(project)}
                </div>
                <div className="col l10 m10 hide-on-small-only show-on-medium-and-up project-content">
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

  getLastPosition() {
    if (this.state.projectsNumber < LIMIT_FLOOR) return LIMIT_FLOOR
    if (this.state.projectsNumber > LIMIT_CEIL) return LIMIT_CEIL
    return this.state.projectsNumber
  }

  renderImage(project) {
    return (
      <div className="col s12 l2 m2 center">
        <img src={project.img} className="circle project-img" alt={project.company}/>
      </div>
    )
  }

  renderContent(project) {
    return (
      <p className="project-description">
        <b>{project.name}</b> <span className="project-date">{project.date}</span> • 
        {this.renderProjectLink(project.website, "Website", "fa fa-link")}
        {this.renderProjectLink(project.repository, "Github", "fa fa-github")}
        {this.renderProjectLink(project.paper, "Paper", "fa fa-file-text")}
        {this.renderProjectLink(project.poster, "Poster", "fa fa-file-image-o")}
        <br/>
        {project.description}
      </p>
    )
  }

  renderProjectLink(link, name, icon) {
    if (link) {
      return (
        <span className="project-link-wrapper">
          <a href={link} className="project-icon" target="_blank" onClick={(e) => this.trackClick(e, link, name)}>
            <i className={`${icon}`} aria-hidden="true"></i> {name}
          </a>
        </span>
      )
    }
  }

  trackClick(event, link, name) {
    this.context.mixpanel.track(
      'project_link_clicked', 
      {
        link: link,
        name: name
      }
    )
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
    this.setState({
      projectsNumber: event.target.value
    })
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
    skills: ["Node.js", "Redux", "d3.js"]
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
    date: "2015 - 2016",
    skills: ["Unity", "C#"]
  },
  {
    name: "Recife's Municipal Education Visualization",
    description: "Data Visualization final project about Recife's Education, exploring open data to visualize schools facilities and performance.",
    website: "https://peaonunes.github.io/edurec-vis-visualizacao-2016-2/",
    repository: "https://github.com/peaonunes/edurec-vis-visualizacao-2016-2",
    img: dadosabertosrecife,
    date: "2016",
    skills: ["d3.js", "JavaScript"]
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
    img: neural,
    date: "2016",
    skills: ["Neural Netowrks", "Matlab", "Python"]
  },
  {
    name: "Software Inspection (not published)",
    description: "Research of Software Inspection under a Theoretical look, Enterprise usage and Software Quality.",
    paper: "http://bit.ly/InspecaodeSoftware",
    img: inspection,
    date: "2016",
    skills: ["Software Quality", "Software Inspection"]
  },
  {
    name: "Complaints Mining (not published)",
    description: "A Data Mining Approach for Evaluating the Solution of Costumer Complaints, final Decision and Data Mining Support Systems project.",
    paper: "http://bit.ly/DataManing-CostumersComplaints",
    img: datamining,
    date: "2015",
    skills: ["KNIME", "Python", "Data Mining"]
  },
  {
    name: "Stig Startup",
    description: "Led project management and developing Client/Server iOS Application, running Lean Startup methodology.",
    img: "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-1/p200x200/1234371_202650289913726_2141085768_n.png?oh=5ccf850b6b37a54ea3016b201c8abcf8&oe=5A8E3DDD",
    date: "2014-2015",
    skills: ["Objective-C", "Node.js"]
  }
]

const LIMIT_FLOOR = 4
const LIMIT_CEIL = PROJECTS.length
const ARRAY_FIRST_POSITION = 0

export default Projects;