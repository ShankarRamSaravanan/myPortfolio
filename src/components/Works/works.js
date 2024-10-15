import React from 'react';
//import {Link} from 'react-scroll';
import './works.css';
import java from '../../assets/javapng.jpg';

import swift from '../../assets/Apple.png'
import translation from '../../assets/translation.png';
import weather from '../../assets/weather.png';
import LeetCode from '../../assets/LeetCode.png';

import HTS from '../../assets/HTS.png';


const Works = () => {
  const youtubeUrl = 'https://www.youtube.com/';
  return (
    <section id="works">
        <h2 className='workstitle'>My portfolio</h2>
        <span className="worksDesc">Some description goes here</span>
        <div className="worksImgs">
    
          <a href="https://github.com/ShankarRamSaravanan/Translation-Utility-App"><img src={translation} alt="" className="worksImg" /></a>
              
          <a href={"https://leetcode.com/u/ShankarRam_Saravanan"}><img src={LeetCode} alt="" className="worksImg" /></a>
              
          <a href={"https://www.htscoatings.in/"}><img src={HTS} alt="" className="worksImg" /></a>
              
          <a href={youtubeUrl}><img src={java} alt="" className="worksImg" /></a>
              
          <a href={youtubeUrl}><img src={swift} alt="" className="worksImg" /></a>

        </div>

        <button className="worksBtn">See More</button>
    </section>

  )
}

export default Works