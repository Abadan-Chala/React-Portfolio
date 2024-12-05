import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo (2).png'
import underline from '../../assets/underline.png'

const Navbar = () => {

  const [menu,setMenu] = useState("about")
  return (
    <div className='navbar'>
      <img src={logo} alt='AC'/>
      <ul className="nav-menu">
        <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>

      <div className="nav-connect">Connect me!</div>
    </div>
  )
}

export default Navbar

