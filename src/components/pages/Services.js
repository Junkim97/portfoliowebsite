import React from 'react'
import '../../App.css'
import me from '../../images/me.jpg'

function Services () {
  return (
    <div className='aboutContainer'>
      <h1>About Me</h1>
      <img src={me} height='120px' width='120px'></img>
      <div className='textWrapper'>
        <p>I am a fourth year computer science student at the University of British Columbia, and an aspiring software engineer. I mostly have experience with front end devlopment and full stack applications but I am always trying to learn new skills to add to my repetoire while polishing ones I already have. Outside of coding I love photography and travelling.</p>        
       </div>     
       
       <div className='skillsWrapper'>
         <h2>Skills</h2>
         <div className='skillIcons'>
           <i class='fab fa-html5'></i>
           <i class="fab fa-css3"></i>
           <i class="fab fa-js"></i>
           <i class="fab fa-react"></i>
           <i class="fab fa-python"></i>
           <i class="fab fa-git-alt"></i>
         </div>
        </div>
    </div>
      
      
  )
}

export default Services