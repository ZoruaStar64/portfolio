import React, {useState} from 'react';
import '../index.js';
import { motion } from 'framer-motion';
import starContainerImg from "../images/starContainer.png"; 
import darkStarContainerImg from "../images/darkStarContainer.png";

function Header({toggleStyle}) {

  /* add a dutch/english toggle button */ 
  /* responsive css for the Email Modal */
  /* oh and remove any unneeded code after you're done just don't remove anything usefull on accident */
  
  const [switchStarText, switchStarTextNow] = useState(false)

  const toggleStarText = () => {
    switchStarTextNow(!switchStarText);
  }

      return (
        <div>
          
          {/* Toggle to change the header's background and the starcontainer images */}
          {!toggleStyle ?
          <div className='headerBackground purpleToWhite'> 

          <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} onClick={toggleStarText} className='nameAndProfession'>
          <motion.img animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}}  src={starContainerImg}  className='starContainer'></motion.img>
            {!switchStarText ?
            <div>
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P1'>Sander</motion.h1>
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P2'>Borgman</motion.h1>
            </div>
            :
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='professionH1'>Software Developer</motion.h1>   
          }
          </motion.div>

          <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='statusContainer'>
          <motion.img animate={{rotateZ: -360}} transition={{type: "spring",duration: 2}}   src={starContainerImg} className='starContainer'></motion.img>
          <motion.h1 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusLabel'>Status :</motion.h1>
          <motion.h2 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusContent'>Opdracht voor de gemeente Almere</motion.h2>

          </motion.div>
          </div> :
          <div className='headerBackground blueToDarkBlue'>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} onClick={toggleStarText} className='nameAndProfession'>
             <motion.img animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}}  src={darkStarContainerImg}  className='starContainer'></motion.img>
             {!switchStarText ?
            <div>
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P1'>Sander</motion.h1>
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='nameH1 nameH1P2'>Borgman</motion.h1>
            </div>
            :
            <motion.h1 animate={{rotateZ: 360}} transition={{type: "spring", duration: 2}} className='professionH1'>Software Developer</motion.h1>   
          } 
            </motion.div>

            <motion.div whileHover={{rotateY: 180}} transition={{duration: 1}} className='statusContainer'>
            <motion.img animate={{rotateZ: -360}} transition={{type: "spring",duration: 2}}   src={darkStarContainerImg} className='starContainer'></motion.img>
              <motion.h1 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusLabel'>Status :</motion.h1>
              <motion.h2 animate={{rotateZ: -360}} transition={{type: "spring", duration: 2}} className='statusColors statusContent'>Opdracht voor de gemeente Almere</motion.h2>

            </motion.div>

          </div>}
        
        </div>
      );
    }

export default Header;