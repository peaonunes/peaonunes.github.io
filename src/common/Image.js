import PropTypes from 'prop-types'
import React from 'react'

import './Image.css'

const Image = ({ src, alt }) => (
  <div className="col s12 l2 m2 center">
    <img src={src} className="circle img-size" alt={alt} title={alt} />
  </div>
)

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
