import NavBar from "./components/NavBar/NavBar.js";
import Intro from "./components/Intro/Intro.js";
import Skills from "./components/Skills/Skills.js";
import Works from "./components/Works/works.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/footer.js";
import AboutMe from './components/AboutMe/AboutMe.js';
import React from 'react';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
