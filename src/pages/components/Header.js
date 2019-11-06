import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import NavBar from './partials/NavBar';

export default class Header extends Component {
  render() {
    return (
      <header>
        <NavBar />
      </header>
    )
  }
}
