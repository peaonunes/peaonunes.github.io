import React from 'react'

import Image from './../common/Image'

import ufpe from './assets/ufpe.jpg'

const Universities = () => (
  <div className="row">
    {UNIVERSITIES.map((university, index) => {
      return (
        <div
          className="col s12 m12 l12"
          data-aos="fade-up"
          key={`${university.name}_${index}`}>
          <div className="row">
            <div className="col l3 m3 left hide-on-small-only show-on-medium-and-up">
              <Image src={university.img} alt={university.name} />
            </div>
            <div className="col s12 left hide-on-med-and-up">
              <Image src={university.img} alt={university.name} />
            </div>
            <div className="col s12 l9 m9">
              <ul>
                <li>
                  <b>{university.degree}</b>
                </li>
                <li>{university.name}</li>
                <li>
                  <span className="education-date">{university.date}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

const UNIVERSITIES = [
  {
    degree: 'Bachelor Computer Science',
    date: 'Jan 2011 to Dec 2016',
    name: 'Federal University of Pernambuco, Recife-PE, Brasil',
    img: ufpe
  },
  {
    degree: 'Exchange Undergrad Student in Computer Science',
    date: 'Jan 2014 to Feb 2015',
    name: 'University Of Liverpool, Liverpool, United Kingdom',
    img:
      'https://upload.wikimedia.org/wikipedia/en/e/e5/UNIVERSITY_OF_LIVERPOOL_COAT_OF_ARMS.png'
  }
]

export default Universities
