import PropTypes from 'prop-types'
import React from 'react'

const ContactBadge = ({ contact, onClick }) => (
  <a
    title={contact.title}
    href={contact.href}
    className="contact-link"
    target="_blank"
    rel="noopener noreferrer"
    onClick={e => onClick(e, contact.href)}>
    <i
      name={contact.href}
      className={`${contact.icon} contact-icon`}
      aria-hidden="true"
    />
  </a>
)

ContactBadge.propTypes = {
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContactBadge
