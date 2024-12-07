import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am web developer from, ETHIO.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">

        <p className="footer-bottom-left" class="mb-0">&copy; 2023 Abadanaf Chala. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
