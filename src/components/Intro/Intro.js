import React from 'react';
import './Intro.css';
import profile from '../../assets/profile.png';
import {Link} from 'react-scroll'
import hireMe from '../../assets/hireMe.png';

const Intro = () => { 
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span><br/>
            <span className="introText">I'am <span className="introName">Shankarram</span><br/>Software Engineer</span>
            
            <p  align="left" className="introPara">
            Shankar Ram Saravanan holds a Master’s degree in Data Science from the University at Buffalo - SUNY, completed in May 2023, along with an MSc & BSc in Computer Science from Bharathiyar University, graduated in May 2021. During his academic journey, Shankar focused on a variety of technical projects
            </p>
        
            <Link>  <button className='btn'> <img src={hireMe} className="hireMe" alt="Hire me" /><h1>Hire me</h1></button></Link>
         
        </div>

        <img src={profile} alt="Profile Image"  className='bg'/>
    </section>
  )
}

export default Intro