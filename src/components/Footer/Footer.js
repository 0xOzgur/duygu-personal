import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-items'>
        <Link to=''>LinkedIn</Link>

        <FontAwesomeIcon icon="fab fa-github" />
        <FontAwesomeIcon icon="fab fa-twitter-square" />
      </div>
    </div>
  )
}

export default Footer
