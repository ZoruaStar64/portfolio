import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './components/main.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import darkModeButton from "./images/darkModeButton.png";
import lightModeButton from "./images/lightModeButton.png";

/*function swapStyleSheet(sheet) {
  document.getElementById("headerStyle").setAttribute("href", sheet);  
  document.getElementById("bodyStyle").setAttribute("href", sheet);  
}

function initate() {
  var style1 = document.getElementById("styleSwitchButton");
  var style2 = document.getElementById("stylesheet2");

  style1.onclick = swapStyleSheet("default.css");
  style2.onclick = swapStyleSheet("dark.css");
}*/

/*const [isActive, setActive] = useState("false");

const handleToggle = () => {
  setActive(!isActive);
};*/
    
    
    

function Page() {

  const [togglePageStyle, setPageStyle] = useState(false);
  const toggleStyle = () => {
      setPageStyle(!togglePageStyle);
  }
  const currentStyleState = togglePageStyle;
      return (
        
          <div>
            
          {!togglePageStyle ?
            <div>
            <div className='navbar navLightGradient'>
            <a className='headerLinks navLinkColorLight' href='#'>Home</a><a className='headerLinks navLinkColorLight' href='#AboutMe'>About</a>
            <a className='headerLinks navLinkColorLight' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorLight' href='#Projects'>Projects</a>
            <a className='headerLinks navLinkColorLight' href='#Contact'>Contact</a>
          </div>
          <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={darkModeButton} className='darkModeButton' title='Dark mode button'>
          </motion.img></div> :
          <div>
          <div className='navbar navDarkGradient'>
          <a className='headerLinks navLinkColorDark' href='#'>Home</a><a className='headerLinks navLinkColorDark' href='#AboutMe'>About</a>
          <a className='headerLinks navLinkColorDark' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorDark' href='#Projects'>Projects</a>
          <a className='headerLinks navLinkColorDark' href='#Contact'>Contact</a>
          </div>
          <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={lightModeButton} className='darkModeButton' title='Light mode button'>
          </motion.img></div>
          }
          
        <Header toggleStyle={currentStyleState} />
        <Body toggleStyle={currentStyleState} />
        <Footer />
        </div>
      ); 

    }

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );