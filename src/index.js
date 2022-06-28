import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './components/main.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import darkModeButton from "./images/darkModeButton.png";
import lightModeButton from "./images/lightModeButton.png";

function Page() {

// this function toggles the page style once the theme button gets clicked
  const [togglePageStyle, setPageStyle] = useState(true);
  const toggleStyle = () => {
      setPageStyle(!togglePageStyle);
  }
  // Variable so the current theme can get sent to the Header and Body
  const currentStyleState = togglePageStyle;
      return (
        
          <div>
            {/* theme toggle for navbar */}
          {!togglePageStyle ?
            
            <div className='navbar navLightGradient'>
            <a className='headerLinks navLinkColorLight' href='#'>Home</a><a className='headerLinks navLinkColorLight' href='#AboutMe'>About</a>
            <a className='headerLinks navLinkColorLight' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorLight' href='#Projects'>Projects</a>
            <a className='headerLinks navLinkColorLight' href='#Contact'>Contact</a>
          </div>
          :
          <div className='navbar navDarkGradient'>
          <a className='headerLinks navLinkColorDark' href='#'>Home</a><a className='headerLinks navLinkColorDark' href='#AboutMe'>About</a>
          <a className='headerLinks navLinkColorDark' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorDark' href='#Projects'>Projects</a>
          <a className='headerLinks navLinkColorDark' href='#Contact'>Contact</a>
          </div>
          }
          {/* toggle to change the theme button */}
          {!togglePageStyle ? 
          <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={darkModeButton} className='darkModeButton' title='Dark mode button'>
          </motion.img>
          :
          <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={lightModeButton} className='darkModeButton' title='Light mode button'>
          </motion.img>
          }
          {/* send the toggle data to the header, body and footer */}
        <Header toggleStyle={currentStyleState} />
        <Body toggleStyle={currentStyleState} />
        <Footer toggleStyle={currentStyleState} />
        </div>
      ); 

    }
// This renders the entire page
ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );