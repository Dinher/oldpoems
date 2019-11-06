import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav id="nav_container">
        <div id="nav-logo"><Link to="/"><p><strong>old</strong>poems.</p></Link></div>
        <ul>
          {
            //<li className="nav-item"><Link to="/words">words</Link></li>
          }
          <li className="nav-item"><Link to="/brackets">projects</Link></li>
          <li className="nav-item"><Link to="/scenes">photography</Link></li>
          <li className="nav-item"><Link to="/sounds">music</Link></li>
          <li className="nav-item nav-unavailable">writing</li>
          <li className="nav-item"><Link to="/about">about</Link></li>
        </ul>
      </nav>
    )
  }
}
