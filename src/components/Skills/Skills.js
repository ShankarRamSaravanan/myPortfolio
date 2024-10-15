import React from 'react';
import './Skills.css';
import java from '../../assets/java.png';
import JS from '../../assets/JS.png';
import react from '../../assets/react.png';
import LeetCode from '../../assets/LeetCode.png';
import Py from '../../assets/Py.png';
import SQL from '../../assets/SQL.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Know</span>
        <span className="skillDesc">Programming Languages</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={JS} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>JavaScript</h2>
                    <p>All images are the exclusive property of their respective companies and are protected under the International Copyright Laws. Design by Arthean Design Studio·18 Pins 1y</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={java} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Java</h2>
                    <p>you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Py} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Python</h2>
                    <p>You can write your own content  here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SQL} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>SQL</h2>
                    <p>You can write your own content  here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills