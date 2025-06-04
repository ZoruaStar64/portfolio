import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './components/themes.css';
import './components/main2.css';
import Navbar from './parts/navbar.js';
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
            <Navbar toggleStyle={currentStyleState}></Navbar>
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
                  <h3 className='status'>Op zoek naar een afstudeerstage</h3>
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
                <h3 className='status'>Op zoek naar een afstudeerstage</h3>
              </div>
            </div>
          </div>
          }
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