import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="My Profile"/>
        <h1><span>I'm Abadanaf Chala,</span> Web Developer in Ethiopia</h1>
        <p>I'm Software Engineering Student at Haramaya University</p>
        <div className="hero-action">
           <div className="hero-connect">Connect me</div> 
           <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
