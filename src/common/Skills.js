import PropTypes from 'prop-types'
import React from 'react'

const Skills = ({ skills }) => (
  <div>
    {skills.map((skillName, index) => {
      return (
        <div key={`${skillName}_${index}`} className="chip">
          {skillName}
        </div>
      )
    })}
  </div>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Skills
