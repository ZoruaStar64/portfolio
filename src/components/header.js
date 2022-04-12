import React from 'react';
import ReactDOM from 'react-dom';
import '../index.js';
import './header.css';
import { motion } from 'framer-motion';
import starContainerImg from "../images/starContainer.png"; 
import darkModeButton from "../images/darkModeButton.png";
import lightModeButton from "../images/lightModeButton.png";

let currentMode = 'Light';
let buttonStyle = darkModeButton;
function changeMode() {
  console.log("function reached");
  if (currentMode === 'Light') {
      currentMode = 'Dark';
      buttonStyle = lightModeButton;
      console.log(buttonStyle);
  } else {
    currentMode = 'Light';
    buttonStyle = darkModeButton;
    console.log(buttonStyle);
  }
  return buttonStyle;
}

class Header extends React.Component {
    render() {
      return (
        <div>

          <div className='navbar'>
            <a className='headerLinks' href='#'>Home</a><a className='headerLinks' href='#AboutMe'>About</a>
            <a className='headerLinks' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks' href='#Projects'>Projects</a>
            <a className='headerLinks' href='#Contact'>Contact</a>
          </div>

          <div className='headerBackground'>
            
            <motion.img animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={changeMode} src={buttonStyle} className='darkModeButton'>

            </motion.img>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='nameAndProfession'>
             <motion.img animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}}  src={starContainerImg} className='starContainer'></motion.img>
              <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P1'>Sander</motion.h1>
              <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P2'>Borgman</motion.h1>
              <h1 className='professionH1'>Software Developer</h1>   
            </motion.div>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='statusContainer'>
            <motion.img animate={{rotateZ: -360}} transition={{type: "spring",duration: 2}}   src={starContainerImg} className='starContainer'></motion.img>
              <motion.h1 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusLabel'>Status :</motion.h1>
              <motion.h2 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusContent'>Learning React<br></br>Creating Portfolio</motion.h2>

            </motion.div>

          </div>
        
        </div>
      );
    }
}

export default Header;