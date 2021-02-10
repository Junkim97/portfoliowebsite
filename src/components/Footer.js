import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'



function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/services'>Learn about my skills</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/products'>Check out some of my prior work</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Github</h2>
            <a href='https://github.com/Junkim97' target='blank'>Check out my github</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/sign-up'>Get in touch with me</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i className='fas fa-laptop-code'/> Jun Kim 
            </Link>
          </div>
          <small class='website-rights'>Jun Kim © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/Junkim97'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/jun-k-743388a5/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer 