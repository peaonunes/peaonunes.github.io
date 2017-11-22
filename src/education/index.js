import ufpe from './assets/ufpe.jpg'
import './assets/education.css'
import React from 'react'

class Education extends React.Component {
  render() {
    return (
      <div className="row">
        <h5 className="light courier-new">> list education</h5>
        <div className="education-row">
          <div className="col s12 m6 l6 universities-margin">
            {this.renderUniversities()}
          </div>
          <div className="col s12 m6 l6">
            {this.renderOthers()}
          </div>
        </div>
      </div>
    )
  }

  renderUniversities() {
    return (
      <div className="row">
        {
          UNIVERSITIES.map((university, index) => {
            return (
              <div className="col s12 m12 l12" data-aos="fade-up" key={`${university.name}_${index}`}>
                <div className="row">
                  <div className="col l2 m2 left hide-on-small-only show-on-medium-and-up">
                    <img src={university.img} className="circle education-img" alt={university.name}/>
                  </div>
                  <div className="col s12 left hide-on-med-and-up">
                    <img src={university.img} className="circle education-img" alt={university.name}/>
                  </div>
                  <div className="col s12 l10 m10">
                    <ul>
                      <li><b>{university.degree}</b></li>
                      <li>{university.name}</li>
                      <li><span className="education-date">{university.date}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderOthers() {
    return (
      <div className="row">
        {this.renderArticles()}
        {this.renderCertificates()}
      </div>
    )
  }

  renderArticles() {
    return (
      <div className="col s12 m12 l12 list-row" data-aos="fade-up">
        <b>
          <span>
            <i className="fa fa-search education-icon education-link-wrapper" aria-hidden="true"></i>
            Articles
          </span>
        </b>
        {
          ARTICLES.map((article, index) => {
            return (
              <ul key={`${article}_${index}`}>
                <li>{article.name}</li>
                <li>
                  @ {article.conference}
                  {this.renderEducationLink(article.conference_href, "Website", "fa fa-link")}
                  {this.renderEducationLink(article.href, "Paper", "fa fa-file-text")}
                </li>
                <li className="education-date">
                  {article.date}
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }

  renderEducationLink(link, name, icon) {
    if (link) {
      return (
        <span className="education-link-wrapper">
          <a href={link} className="education-icon" target="_blank">
            <i className={`${icon}`} aria-hidden="true"></i> {name}
          </a>
        </span>
      )
    }
  }

  renderCertificates() {
    return (
      <div className="col s12 m12 l12" data-aos="fade-up">
        <span>
          <b>
            <i className="fa fa-certificate education-icon education-link-wrapper" aria-hidden="true"></i>
            Certifications
          </b>
        </span>
        {
          CERTIFICATES.map((certificate, index) => {
            return (
              <ul key={`${certificate}_${index}`}>
                <li>
                  {certificate.name} {this.renderEducationLink(certificate.href, "", "fa fa-file-image-o")}
                </li>
                <li className="education-date">
                  {certificate.date}
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

const UNIVERSITIES = [
  {
    degree: "Bachelor Computer Science",
    date: "Jan 2011 to Dec 2016",
    name: "Federal University of Pernambuco, Recife-PE, Brasil",
    img: ufpe
  },
  {
    degree: "Exchange Undergrad Student in Computer Science",
    date: "Jan 2014 to Jan 2015",
    name: "University Of Liverpool, Liverpool, United Kingdom",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e5/UNIVERSITY_OF_LIVERPOOL_COAT_OF_ARMS.png"
  }
]

const ARTICLES = [
  {
    name: "SwiftCity - Visualizing Swift Projects as Cities",
    conference: "ICSE 2017",
    conference_href: "http://icse2017.gatech.edu/",
    date: "2017",
    href: "http://ieeexplore.ieee.org/document/7965361"
  }
]

const CERTIFICATES = [
  {
    name: "Learn DevOps: The Complete Kubernetes Course",
    href: "https://www.udemy.com/certificate/UC-JRDKDYGE/",
    date: "2017"
  },
  {
    name: "Apache Kafka Series - Learning Apache Kafka for Beginners",
    href: "https://www.udemy.com/certificate/UC-Z0G9LV59/",
    date: "2017"
  },
  {
    name: "Design Thinking for Business Innovation",
    href: "http://peaonunes.github.io/files/Design%20Thinking%20-%202013.pdf",
    date: "2014"
  }
]

export default Education;