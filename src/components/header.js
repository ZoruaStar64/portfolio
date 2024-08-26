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

          <div onClick={toggleStarText} className='nameAndProfession'>
          <img src={starContainerImg}  className='starContainer'></img>
            {!switchStarText ?
            <div>
            <h1 className='nameH1 nameH1P1'>Sander</h1>
            <h1 className='nameH1 nameH1P2'>Borgman</h1>
            </div>
            :
            <h1 className='professionH1'>Software Developer</h1>   
          }
          </div>

          <div className='statusContainer'>
          <img src={starContainerImg} className='starContainer'></img>
          <h1 className='statusColors statusLabel'>Status :</h1>
          <h2 className='statusColors statusContent'>Opdracht voor de gemeente Almere</h2>

          </div>
          </div> :
          <div className='headerBackground blueToDarkBlue'>

            <div onClick={toggleStarText} className='nameAndProfession'>
             <img src={darkStarContainerImg}  className='starContainer'></img>
             {!switchStarText ?
            <div>
            <h1 className='nameH1 nameH1P1'>Sander</h1>
            <h1 className='nameH1 nameH1P2'>Borgman</h1>
            </div>
            :
            <h1 className='professionH1'>Software Developer</h1>   
          } 
            </div>

            <div className='statusContainer'>
            <img src={darkStarContainerImg} className='starContainer'></img>
              <h1 className='statusColors statusLabel'>Status :</h1>
              <h2 className='statusColors statusContent'>Opdracht voor de gemeente Almere</h2>

            </div>

          </div>}
        
        </div>
      );
    }

export default Header;