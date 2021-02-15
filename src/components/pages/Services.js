import React from 'react'
import '../../App.css'
import me from '../../images/me.jpg'

function Services () {
  return (
    <div className='aboutContainer'>
      <h1>About Me</h1>
      <p>I am a 4th year computer science student at the University of British Columbia</p>
      <img src={me} height='120px' width='120px'></img>
    </div>
      
      
  )
}

export default Services