import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="My Profile"/>
        <h1><span>I'm Abadanaf Chala,</span> Web Developer in Ethiopia</h1>
        <p>I'm Software Engineering Student at Haramaya University.</p>
        <p>Now, I'm working on frontend web developing as a freelancer</p>
        <div className="hero-action">
           <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me</AnchorLink></div> 
           <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
