
import React from 'react'
import './About.css'
import logotwo from '../../assets/logo (2).png'
import myprofile2 from '../../assets/mycontact.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={logotwo} alt="my logo" />
        </div>
        <div className="about-sections">
           <div className="about-left">
            <img src={myprofile2} alt="my profile" />
            </div> 
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced Web Developer with over three years</p>
                    <p>Also, I'm a passionate Graphics Designer</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>BOOTSTRAP</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>LARAVEL</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="my-achieve">
            <h1>My Achievements</h1>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>12+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>7+</h1>
                <p>CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About









