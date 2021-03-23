import React from 'react'
import '../../App.css'

export default function Products() {
  return(
    <div className='projectsWrapper'>
      <h1>Projects</h1>
      <div className='project1'>
        <h2>Parking Lot Web App</h2>
        <p>Created a webapp for an imaginary parking lot company where they could manage parking spots, and parking passes etc. Designed a schema for a relational database and used mysql to query the database and displayed the information on the browswer using html, css, and php.</p>
        <a class='social-icon-link github' href='https://github.com/sassansh/Parking-Lot-Database' target='_blank' aria-label='github'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <div className='project2'>
        <h2>Portfolio Website</h2>
        <p>Created this website as personal portfolio website to show off my coding projects. Used custom styled react components, html, css, and javascript.</p>
        <a class='social-icon-link github' href='https://github.com/Junkim97/portfoliowebsite' target='_blank' aria-label='github'>
          <i className='fab fa-github'></i>
        </a>
      </div>







    </div>
  )
}