import './assets/footer.css'
import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <p className="light courier-new">> add credits</p>
        <p className="light small-text">
          This is my third attemp on building a personal site.<br/>
          This version was made with <a target="_blank" rel="noopener noreferrer" href="http://materializecss.com/">MaterializeCSS</a>,
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/michalsnik/aos"> AOS</a>,
          <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/"> React</a> and spikes of inspiration.
          Font Awesome by Dave Gandy - <a target="_blank" rel="noopener noreferrer" href="http://fontawesome.io">http://fontawesome.io</a>.
        </p>
      </div>
    )
  }
}

export default Footer;