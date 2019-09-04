import PropTypes from 'prop-types'
import React from 'react'

import Link from './../common/Link'

const Certifications = ({ onClick }) => (
  <div className="col s12 m12 l12" data-aos="fade-up">
    <span>
      <b>
        <i className="fa fa-certificate section-title" aria-hidden="true" />
        Certifications
      </b>
    </span>
    {CERTIFICATES.map((certificate, index) => {
      return (
        <ul key={`${certificate}_${index}`}>
          <li>
            {certificate.name}{' '}
            <Link
              href={certificate.href}
              name={''}
              icon={'fa fa-file-image-o'}
              onClick={onClick}
            />
          </li>
          <li className="education-date">{certificate.date}</li>
        </ul>
      )
    })}
  </div>
)

Certifications.propTypes = {
  onClick: PropTypes.func.isRequired
}

const CERTIFICATES = [
  {
    name: 'Learn DevOps: Advanced Kubernetes Usage',
    href: 'https://www.udemy.com/certificate/UC-QL0EW0O4/',
    date: '2018'
  },
  {
    name: 'Learn DevOps: The Complete Kubernetes Course',
    href: 'https://www.udemy.com/certificate/UC-JRDKDYGE/',
    date: '2017'
  },
  {
    name: 'Apache Kafka Series - Learning Apache Kafka for Beginners',
    href: 'https://www.udemy.com/certificate/UC-Z0G9LV59/',
    date: '2017'
  },
  {
    name: 'Design Thinking for Business Innovation',
    date: '2014'
  }
]

export default Certifications
