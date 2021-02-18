import React from 'react'
import '../../App.css'
import me from '../../images/me.jpg'

function Services () {
  return (
    <div className='aboutContainer'>
      <h1>About Me</h1>
      <div className='textWrapper'>
        <img src={me} height='120px' width='120px'></img>
        <p>I am a fourth year computer science student at the University of British Columbia, and an aspiring software engineer. I mostly have experience with front end devlopment and full stack applications but I am always trying to learn new skills to add to my repetoire while polishing ones I already have. Outside of coding I enjoy photography and love to travel.</p>        
       </div>     
    </div>
      
      
  )
}

export default Services