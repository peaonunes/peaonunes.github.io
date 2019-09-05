import PropTypes from 'prop-types'
import React from 'react'

const Content = ({ onClick, position, href, company, period }) => (
  <div>
    <b>{position}</b> @
    <a
      target="_blank"
      href={href}
      onClick={e => onClick(e, href, company)}
      rel="noopener noreferrer">
      <span className="light job-title"> {company}</span>
    </a>
    <p className="job-period">{period}</p>
  </div>
)

Content.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Content
