import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


library.add(fab);

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-detail'>
        <span><FontAwesomeIcon icon={faCopyright} /> 2022 DC development</span>
      </div>
      <div className='footer-items'>
        <a href='https://github.com/dcavusoglu'
          target='_blank'
          rel="noopener"
          aria-label='Github'><FontAwesomeIcon icon="fab fa-github" />
        </a>
        <a href='https://www.linkedin.com/in/duygucavusoglu/'
          target='_blank'
          rel="noopener"
          aria-label='LinkedIn'><FontAwesomeIcon icon="fab fa-linkedin" />
        </a>
        <a href='https://twitter.com/_duygucavusoglu'
          target='_blank'
          rel="noopener"
          aria-label='Twitter'><FontAwesomeIcon icon="fab fa-twitter-square" />
        </a>
      </div>
    </div>
  )
}

export default Footer
