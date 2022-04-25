import React from 'react';
import ReactDOM from 'react-dom';
import '../index.js';
import './header.css';
import { motion } from 'framer-motion';
import starContainerImg from "../images/starContainer.png"; 
import darkModeButton from "../images/darkModeButton.png";
import lightModeButton from "../images/lightModeButton.png";



class Header extends React.Component {
    render() {

      /*state = {
        lightMode: true
      }
      toggleImage = () => {
        this.setState(state => ({ lightMode: !state.lightMode }))
      }
      getImageName = () =>  this.state.lightMode ? lightModeButton : darkModeButton;
   
  const buttonStyle = this.getImageName(); */

  /* add a dutch/english toggle button */ 
  /* also move the navbar to index.js so that it is actually able to go all the way down */
  /* also also: please group the css files together it will be easier to toggle light/dark mode that way trust me */
  /* oh and remove any unneeded code after you're done just don't remove anything usefull on accident */

  let buttonStyle = darkModeButton;
  let currentMode = 'Light';
  function changeMode(e) {
    console.log("function reached");
    if (currentMode === 'Light') {
        currentMode = 'Dark';
        e.target.setAttribute ('src', lightModeButton);
    } else {
      currentMode = 'Light';
      e.target.setAttribute ('src', darkModeButton);
    }
  } 

      let classAdjective = 'menu';
      if (this.props.isActive) {
        classAdjective += 'dark';
      }
      return (
        <div>

          <div className='navbar'>
            <a className='headerLinks' href='#'>Home</a><a className='headerLinks' href='#AboutMe'>About</a>
            <a className='headerLinks' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks' href='#Projects'>Projects</a>
            <a className='headerLinks' href='#Contact'>Contact</a>
          </div>

          <div className='headerBackground'>
            
            <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={changeMode} src={buttonStyle} className='darkModeButton' title='Dark (or light if sun is there) mode button'>

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