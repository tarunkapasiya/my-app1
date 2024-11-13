import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <>
    <nav className='navbar'>
        <ul className='navul'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>contact</li>
          <li>search</li>
        </ul>
    </nav>
    </>
  )
}

Navbar.propTypes = {navfirstoption: PropTypes.string.isRequired}

Navbar.defaultProps = {
  navfirstoption:"Home page"
}