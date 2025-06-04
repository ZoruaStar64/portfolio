import React, {useState} from 'react';
import '../index.js';
import { motion } from 'framer-motion';
import darkModeButton from "../images/darkModeButton.png";
import lightModeButton from "../images/lightModeButton.png";

function Header({toggleStyle}) {

  /* add a dutch/english toggle button */ 
  /* responsive css for the Email Modal */
  /* oh and remove any unneeded code after you're done just don't remove anything usefull on accident */
  
  const [switchStarText, switchStarTextNow] = useState(false)

  const [togglePageStyle, setPageStyle] = useState(true);

  const toggleStyleState = () => {
      setPageStyle(!togglePageStyle);
  }

  const toggleStarText = () => {
    switchStarTextNow(!switchStarText);
  }

      return (
        <div>
          
          {/* Toggle to change the header's background and the starcontainer images */}
          {toggleStyle === 'Light' ?
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
              <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyleState} src={darkModeButton} className='darkModeButton' title='Dark mode button'>
              </motion.img>
            </div>
            <div className='statusContainer starContainer'>
              <div className='statusH1'>
                <h1>Status :</h1>
                <h3 className='status'>Op zoek naar een afstudeerstage</h3>
              </div>
            </div>
          </div> 
          : toggleStyle === 'Dark' ?
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
                <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyleState} src={lightModeButton} className='darkModeButton' title='Light mode button'>
                </motion.img>
              </div>
              <div className='statusContainer darkStarContainer'>
              <div className='statusH1'>
                <h1>Status :</h1>
                <h3 className='status'>Op zoek naar een afstudeerstage</h3>
              </div>
              </div>

          </div>
          :
          //Default
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
                <motion.img id='styleSwitchButton' animate={{rotateZ: 360}} transition={{repeatDelay: 2, repeat: Infinity, duration: 10}} onClick={toggleStyleState} src={lightModeButton} className='darkModeButton' title='Light mode button'>
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
        
        </div>
      );
    }

export default Header;