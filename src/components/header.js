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
      return (
        <div>

          <div className='navbar'>
            <motion.a whileHover={{textShadow: [0, 0, 10, "#FFFFFF"] }} className='headerLinks' href='#'>Home</motion.a><a className='headerLinks' href='#'>About</a>
            <a className='headerLinks' href='#'>Skills/Tools</a><a className='headerLinks' href='#'>Projects</a>
            <a className='headerLinks' href='#'>Contact</a>
          </div>

          <div className='headerBackground'>
            
            <motion.img animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} src={darkModeButton} className='darkModeButton'>

            </motion.img>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='nameAndProfession'>
             <motion.img animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}}  src={starContainerImg} className='starContainer'></motion.img>
              <h1 className='nameH1 nameH1P1'>Sander</h1>
              <h1 className='nameH1 nameH1P2'>Borgman</h1>
              <h1 className='professionH1'>Software Developer</h1>   
            </motion.div>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='statusContainer'>
            <motion.img animate={{rotateZ: -360}} transition={{type: "spring",duration: 2}}   src={starContainerImg} className='starContainer'></motion.img>
              <h1 className='statusColors statusLabel'>Status :</h1>
              <h2 className='statusColors statusContent'>Learning React<br></br>Creating Portfolio</h2>

            </motion.div>

          </div>
        
        </div>
      );
    }
}

export default Header;