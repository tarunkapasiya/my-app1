import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <>
    <nav className='navbar'>
        <ul className='navul'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
        </ul>
    </nav>
    </>
  )
}

Navbar.propTypes = {navfirstoption: PropTypes.string.isRequired}

Navbar.defaultProps = {
  navfirstoption:"Home page"
}