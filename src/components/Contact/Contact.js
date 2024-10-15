import React,{ useRef, useState } from 'react'
import './Contact.css';
import moodys from '../../assets/Moodys-Logo.png';
import avihkar from '../../assets/avishkar.png';
import TCR from '../../assets/TCR .png';
//import swift from '../../assets/Apple.png'
import discord from '../../assets/discord.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github-logo.png';
import HTS from '../../assets/HTS.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const result = await emailjs.sendForm(
        'service_jsrmxjq',
        'template_tg115ye',
        form.current,
        'bveXkSSEJGEMKDpBo'
      );
  
      console.log(result.text);
    } catch (error) {
      console.error(error.text);
    }
  };


  const [activeButton, setActiveButton] = useState(true);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <section id="contactPage">
        <div className="clients">
          <h1 className="contactPageTitle">These are all the places where I worked</h1>
          <p className="clientDesc">
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes.
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes.
          </p>
        <div className="clientImgs">
          <a  className="clientImg" onClick={() => handleClick(1)}><img  src={moodys} alt="" className="MyyImg"/></a>
          <a classsName="clientImg" onClick={() => handleClick(2)}><img  src={avihkar} alt="" className="MyyImg"/></a>
          <a  className="clientImg" onClick={() => handleClick(3)}><img src={HTS} alt="" className="MyyImg"/></a>

        </div>
        {setActiveButton && (
        <div className='hiddenDivision'>
        
          {activeButton === 1 && <p>•	Upgraded packages, resolved dependency conflicts, and seamlessly integrated them into various Java services.
•	Designed and implemented Session Beans to efficiently process user requests and manage data interaction with the database.
•	Orchestrated a server migration, transitioning from physical servers to the AWS cloud environment.
•	Developed Microservices using Java 8 and Spring Boot to handle CRUD operations, interfacing with the backend, and implemented a web interface using Spring MVC.
•	Created Spring Framework Controllers for request-response handling within the Spring-MVC paradigm.
•	Authored Ansible playbooks to install and configure Tomcat, JBoss, Nginx, and WebSphere, focusing on load balancing and failover.
</p>}
          {activeButton === 2 && <p>•	Upgraded packages, resolved dependency conflicts, and seamlessly integrated them into various Java services.
•	Designed and implemented Session Beans to efficiently process user requests and manage data interaction with the database.
•	Orchestrated a server migration, transitioning from physical servers to the AWS cloud environment.
•	Developed Microservices using Java 8 and Spring Boot to handle CRUD operations, interfacing with the backend, and implemented a web interface using Spring MVC.
•	Created Spring Framework Controllers for request-response handling within the Spring-MVC paradigm.
•	Authored Ansible playbooks to install and configure Tomcat, JBoss, Nginx, and WebSphere, focusing on load balancing and failover.
•	Upgraded packages, resolved dependency conflicts, and seamlessly integrated them into various Java services.
•	Designed and implemented Session Beans to efficiently process user requests and manage data interaction with the database.
•	Orchestrated a server migration, transitioning from physical servers to the AWS cloud environment.
•	Developed Microservices using Java 8 and Spring Boot to handle CRUD operations, interfacing with the backend, and implemented a web interface using Spring MVC.
•	Created Spring Framework Controllers for request-response handling within the Spring-MVC paradigm.
•	Authored Ansible playbooks to install and configure Tomcat, JBoss, Nginx, and WebSphere, focusing on load balancing and failover.
</p>}
          {activeButton === 3 && <p>•	Upgraded packages, resolved dependency conflicts, and seamlessly integrated them into various Java services.
•	Designed and implemented Session Beans to efficiently process user requests and manage data interaction with the database.
•	Orchestrated a server migration, transitioning from physical servers to the AWS cloud environment.
•	Developed Microservices using Java 8 and Spring Boot to handle CRUD operations, interfacing with the backend, and implemented a web interface using Spring MVC.
•	Created Spring Framework Controllers for request-response handling within the Spring-MVC paradigm.
•	Authored Ansible playbooks to install and configure Tomcat, JBoss, Nginx, and WebSphere, focusing on load balancing and failover.
•	Upgraded packages, resolved dependency conflicts, and seamlessly integrated them into various Java services.
•	Designed and implemented Session Beans to efficiently process user requests and manage data interaction with the database.
•	Orchestrated a server migration, transitioning from physical servers to the AWS cloud environment.
•	Developed Microservices using Java 8 and Spring Boot to handle CRUD operations, interfacing with the backend, and implemented a web interface using Spring MVC.
•	Created Spring Framework Controllers for request-response handling within the Spring-MVC paradigm.
•	Authored Ansible playbooks to install and configure Tomcat, JBoss, Nginx, and WebSphere, focusing on load balancing and failover.
.</p>}
        </div>
      )}
      </div>


      
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='user_name'/>
          <input type="email" className="email" placeholder='Your Email' name="user_email"/>
          <textarea name="message" cols="30" rows="5" className="msg" placeholder='Your Message'></textarea>
          <button className="submitBtn" type="submit" value="Send">Submit</button>




          <div className="links">
          <img src={discord} alt="" className="link"/>
          <img src={facebook} alt="" className="link"/>
          <img src={github} alt="" className="link"/>
          <img src={linkedin} alt="" className="link"/>
          </div>
          
        </form>
      </div>


    </section>
  )
}

export default Contact