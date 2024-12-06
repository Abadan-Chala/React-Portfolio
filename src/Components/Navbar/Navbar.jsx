import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo (2).png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MenuOpen from '../../assets/open menu.png'
import MenuClose from '../../assets/closemenu.png'

const Navbar = () => {

  const [menu,setMenu] = useState("about");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt='AC'/>
      <img src={MenuOpen} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={MenuClose} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me!</AnchorLink></div>
    </div>
  )
}

export default Navbar

