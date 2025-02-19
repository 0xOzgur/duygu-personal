import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer-wave'></div>
      <div className='footer-container'>
        <div className='footer-detail'>
          <FontAwesomeIcon icon={faCopyright} />
          <span>{currentYear} DC Development. All rights reserved.</span>
        </div>
        <div className='footer-items'>
          <a
            href='https://github.com/dcavusoglu'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
            href='https://www.linkedin.com/in/duygucavusoglu/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a
            href='https://twitter.com/_duygucavusoglu'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer