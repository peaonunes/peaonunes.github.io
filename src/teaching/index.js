import ufpe from './assets/ufpe.jpg'
import './assets/teaching.css'

import React from 'react'

class Teaching extends React.Component {
  render() {
    return (
      <div className="row">
        <h5 className="light courier-new">> import teaching</h5>
        {this.renderTeaching()}
      </div>
    )
  }

  renderTeaching() {
    return(
      <div>
        {
          TEACHING.map((teaching, index) => {
            return (
              <div key={`${teaching.name}_${index}`} className="col s12 m4 l4 teaching-row " data-aos="fade-up">
                {this.renderImage(teaching)}
                {this.renderContent(teaching)}
              </div>
            )
          })
        }
      </div>
    )
  }

  renderImage(teaching) {
    return (
      <div className="center">
        <img src={teaching.img} className="circle teaching-img" alt={teaching.company}/>
      </div>
    )
  }

  renderContent(teaching) {
    return (
      <div>
        <b>{teaching.role} @ {teaching.where}</b>
        <br/>
        {this.renderTopics(teaching)}
      </div>
    )
  }

  renderTopics(teaching) {
    return (
      <ul>
        {
          teaching.topics.map((topic, index) => {
            return (
              <li key={`${topic.where}_${index}`}>
                {topic.name} <span className="teaching-topic-date">{topic.date}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const TEACHING = [
  {
    where: "CIn, UFPE",
    role: "Volunteering Teacher Assistant",
    img: ufpe,
    topics: [
      {
        date: "2017 to 2017",
        name: "Data Visualization"
      },
      {
        date: "2013 to 2014",
        name: "Theory of Computation"
      },
      {
        date: "2013 to 2014",
        name: "Software Engineering and Systems"
      },
      {
        date: "2012 to 2013",
        name: "Statistics and Probability for Computing"
      }
    ]
  },
  {
    where: "PET-Informática, UFPE",
    role: "Volunteer Teacher",
    img: "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png",
    topics: [
      {
        date: "2013, 2015, 2016",
        name: "Office and Internet to UFPE staff and community people."
      },
      {
        date: "Jan 2016",
        name: "Intro to CS + Python to HS students."
      }
    ]
  },
  {
    where: "Boa Viagem HS",
    role: "Teaching Assistant",
    img: "https://pbs.twimg.com/profile_images/587398326376599552/iJexScMH.jpg",
    topics: [
      {
        date: "2011",
        name: "Mathematics and Chemistry"
      },
      {
        date: "2012",
        name: "Mathematics and Chemistry"
      },
      {
        date: "2013",
        name: "Mathematics and Chemistry"
      }
    ]
  }
]

export default Teaching;