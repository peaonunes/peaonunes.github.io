import PropTypes from 'prop-types'
import React from 'react'

import Link from './../common/Link'

const Content = ({ project, onClick }) => (
  <p className="project-description">
    <b>{project.name}</b> <span className="project-date">{project.date}</span> •
    {project.website && (
      <Link
        href={project.website}
        name={'Website'}
        icon={'fa fa-link'}
        onClick={onClick}
      />
    )}
    {project.repository && (
      <Link
        href={project.repository}
        name={'Github'}
        icon={'fab fa-github'}
        onClick={onClick}
      />
    )}
    {project.paper && (
      <Link
        href={project.paper}
        name={'Paper'}
        icon={'fa fa-file-text'}
        onClick={onClick}
      />
    )}
    {project.poster && (
      <Link
        href={project.poster}
        name={'Poster'}
        icon={'fa fa-file-image-o'}
        onClick={onClick}
      />
    )}
    <br />
    {project.description}
  </p>
)

Content.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    website: PropTypes.string,
    repository: PropTypes.string,
    paper: PropTypes.string,
    poster: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Content
