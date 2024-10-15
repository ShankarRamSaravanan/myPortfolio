import React from 'react';
import './AboutMe.css';
import java from '../../assets/java.png';
import dataScience from '../../assets/dataScience.png';
import react from '../../assets/react.png';
import BuffaloLogo from '../../assets/BuffaloLogo.png';
import PSG from '../../assets/PSG.png';
import LeetCode from '../../assets/LeetCode.png';

const Skills = () => {
  return (
    <section id="AboutMe">
        <span className="skillTitle">Education</span>
        
        <div className="skillBars">
            
            
            
            <div className="skillBar">
                <img src={BuffaloLogo} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Master’s degree in Data Science</h2>
                    <p><b>CourseWork: </b>Introduction to Probability Theory for Data Science, Introduction to Numerical Mathematics for Computing and Data Scientists, Statistical Learning and Data Mining I, Programming and Database Fundamentals for Data Scientists, Statistical Learning and Data Mining II, Introduction to Machine Learning, Data Models Query Language, Analysis of Algorithms, Distributed Systems.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={PSG} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>MSc & BSc in Computer Science</h2>
                    <p><b>CourseWork: </b>Principles of Compiler Design, Data Structures, Object Oriented Programming, Design and Analysis of Algorithms, Operating Systems, Software Engineering Techniques, Parallel and Distributed Computing, Cloud Computing, Machine Learning, Database Management System, Java Programming, Computer Networks and TCP/IP, Agile Software Development</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills