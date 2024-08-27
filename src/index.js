import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './components/main2.css';
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

    /* add a dutch/english toggle button */ 
  /* responsive css for the Email Modal */
  /* oh and remove any unneeded code after you're done just don't remove anything usefull on accident */
  
  const [switchStarText, switchStarTextNow] = useState(false)

  const toggleStarText = () => {
    switchStarTextNow(!switchStarText);
  }
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
          {/*<div className='styleButtonContainer'>
          {!togglePageStyle ? 
            <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={darkModeButton} className='darkModeButton' title='Dark mode button'>
            </motion.img>
          :
            <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={lightModeButton} className='darkModeButton' title='Light mode button'>
            </motion.img>
          }
          </div> */}
          {/* Toggle to change the header's background and the starcontainer images */}
          {!togglePageStyle ?
          <div className='headerBackground purpleToWhite'> 

            <div onClick={toggleStarText} className='nameAndProfession starContainer'>
              
              {!switchStarText ?
              <div className='nameH1'>
                <h1>Sander</h1>
                <h1>Borgman</h1>
              </div>
              :
              <div className='nameH1'>
                <h1>Software</h1>   
                <h1>Developer</h1>
              </div>
            }
            </div>
            <div className='styleButtonContainer'>
              <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={darkModeButton} className='darkModeButton' title='Dark mode button'>
              </motion.img>
            </div>
            <div className='statusContainer starContainer'>
              <div className='statusH1'>
                <h1>Status :</h1>
                <h3 className='status'>Opdracht voor de gemeente Almere</h3>
              </div>
            </div>
          </div> :
          <div className='headerBackground blueToDarkBlue'>

              <div onClick={toggleStarText} className='nameAndProfession darkStarContainer'>
              {!switchStarText ?
              <div className='nameH1'>
                <h1>Sander</h1>
                <h1>Borgman</h1>
              </div>
              :
              <div className='nameH1'>
                <h1>Software</h1>   
                <h1>Developer</h1>
              </div>
            } 
              </div>
              <div className='styleButtonContainer'>
                <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyle} src={lightModeButton} className='darkModeButton' title='Light mode button'>
                </motion.img>
              </div>
              <div className='statusContainer darkStarContainer'>
              <div className='statusH1'>
                <h1>Status :</h1>
                <h3 className='status'>Opdracht voor de gemeente Almere</h3>
              </div>
              </div>

          </div>}
          {/* send the toggle data to the header, body and footer */}
        {/*<Header toggleStyle={currentStyleState} /> */}
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