import PropTypes from 'prop-types'
import React from 'react'

import './Link.css'

const Link = ({ href, name, icon, onClick }) => {
  if (!href) return null

  return (
    <span className="link-wrapper">
      <a
        href={href}
        className="link-icon"
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => onClick(e, href, name)}>
        <i className={`${icon}`} aria-hidden="true" /> {name}
      </a>
    </span>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
