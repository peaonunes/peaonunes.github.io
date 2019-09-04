import PropTypes from 'prop-types'
import React from 'react'

import Link from './../common/Link'

const Articles = ({ onClick }) => (
  <div className="col s12 m12 l12 list-row" data-aos="fade-up">
    <b>
      <span>
        <i className="fas fa-search section-title" aria-hidden="true" />
        Articles
      </span>
    </b>
    {ARTICLES.map((article, index) => {
      return (
        <ul key={`${article}_${index}`}>
          <li>{article.name}</li>
          <li>
            @ {article.conference}
            <Link
              href={article.conference_href}
              name={'Website'}
              icon={'fa fa-link'}
              onClick={onClick}
            />
            <Link
              href={article.href}
              name={'Paper'}
              icon={'fa fa-file-text'}
              onClick={onClick}
            />
          </li>
          <li className="education-date">{article.date}</li>
        </ul>
      )
    })}
  </div>
)

Articles.propTypes = {
  onClick: PropTypes.func.isRequired
}

const ARTICLES = [
  {
    name: 'SwiftCity - Visualizing Swift Projects as Cities',
    conference: 'ICSE 2017',
    conference_href: 'http://icse2017.gatech.edu/',
    date: '2017',
    href: 'http://ieeexplore.ieee.org/document/7965361'
  }
]

export default Articles
