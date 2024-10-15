//Rafce is used to generate this page : SCode will auto-magically create the relevant component structure 

import React,{useState} from 'react'
import './NavBar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png';
import nav from '../../assets/nav.png';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass="active" to='intro'  spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass="active" to='AboutMe'  spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Education</Link>
            <Link activeClass="active" to='skills'  spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass="active" to='works'  spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass="active" to='clients'  spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Experience</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt="" className="desktopMenuImg" />
            Contact Me
        </button>

        <img src={nav} alt="navMenu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to='intro'  spy={true} smooth={true} offset={-50} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='AboutMe'  spy={true} smooth={true} offset={-50} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Education</Link>
            <Link activeClass="active" to='skills'  spy={true} smooth={true} offset={-50} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='works'  spy={true} smooth={true} offset={-60} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to='clients'  spy={true} smooth={true} offset={-50} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass="active" to='contact'  spy={true} smooth={true} offset={-50} duration={-60} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>

        </div>

    </nav>
  )
}

export default NavBar