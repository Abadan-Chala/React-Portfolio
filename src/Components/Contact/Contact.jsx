import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import mail from '../../assets/mail.png'
import call from '../../assets/call icon.png'
import location from '../../assets/location.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3337c235-63e5-4ef8-93a6-794442f75f66");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={contact} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on a new projects, so feel free to contact me and I will assist you by my profession and with great pleasure </p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={mail} alt="" /> <p>abadanafchala@gmil.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>+251928103575</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>Oromia, Ethiopia</p>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='button' className="contact-submit">Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
