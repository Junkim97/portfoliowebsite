import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Hi, I'm Jun, </h1>
      <p>4th year computer science student and aspiring software engineer.</p>

    </div>
  )
}

export default HeroSection
