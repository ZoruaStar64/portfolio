import React, {useState} from 'react';
import '../index.js';
import { motion } from 'framer-motion';
import dice1 from "../images/Dice1.png";
import dice2 from "../images/Dice2.png";
import dice3 from "../images/Dice3.png";
import dice4 from "../images/Dice4.png";
import dice5 from "../images/Dice5.png";
import dice6 from "../images/Dice6.png";
import coin from "../images/coin.png";
import star from "../images/darkModeButton.png";

function Projects({toggleStyle}) {
    return (
        <div>
            
            {/* theme toggle for projects */}
            {!toggleStyle ?
            <div className='projects common seperationMargin whiteToBlue' id='Projects'>

                <div className='Yahtzee projectsCommon'>
                    <a href='https://zoruastar64.github.io/javascript-php/H6/Yathzee.html' className='projectLinks' title='Yahtzee Javascript game'>
                    <h1 className='yatH1'>Yahtzee</h1>
                    <h3 className='yatH3'>(Javascript)</h3>

                    <div className='diceContainer'>
                    <motion.img src={dice1} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice2} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice3} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice4} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice5} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice6} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    </div>
                    </a>
                </div>

                <div className='coinGame projectsCommon'>
                    <a href='http://coingame.sb-dev.nl/wario.html' className='projectLinks' title='Wario Coin game Java to Javascript conversion'>
                    <h1 className='coinH1'>Coin Game</h1>
                    <h3 className='coinH3'>(Java To Javascript)</h3>

                    <div className='coinContainer'>
                    <motion.img src={coin} className='coin' animate={{rotateZ: -30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    <motion.img src={coin} className='coin' whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    <motion.img src={coin} className='coin' animate={{rotateZ: 30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    </div>
                    </a>
                </div>

                <div className='Startracker aquaColor projectsCommon'>
                <a href='https://startracker.sb-dev.nl/index.php' className='projectLinks' title='Star game tracker to track game progress. Made with HTML5/CSS3/Javascript/MYSQL/PHP/Online Database'>
                    <h1 className='starH1 aquaColor'>Startracker</h1>
                    <h3 className='starH3 aquaColor'>(Fullstack project)</h3>

                    <div className='starsContainer'>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.2, repeat: Infinity}}></motion.img>

                    </div>
                    </a>
                </div>
                
            </div>
            :
            <div className='projects common seperationMargin darkBlueToBlue' id='Projects'>

                <div className='Yahtzee projectsCommon'>
                    <a href='https://zoruastar64.github.io/javascript-php/H6/Yathzee.html' className='projectLinks' title='Yahtzee Javascript game'>
                    <h1 className='yatH1'>Yahtzee</h1>
                    <h3 className='yatH3'>(Javascript)</h3>

                    <div className='diceContainer'>
                    <motion.img src={dice1} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice2} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice3} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice4} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice5} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    <motion.img src={dice6} className='diceCommon' whileHover={{rotateZ: 360}} transition={{duration: 0.8}}></motion.img>
                    </div>
                    </a>
                </div>

                <div className='coinGame projectsCommon'>
                    <a href='http://coingame.sb-dev.nl/wario.html' className='projectLinks' title='Wario Coin game Java to Javascript conversion'>
                    <h1 className='coinH1'>Coin Game</h1>
                    <h3 className='coinH3'>(Java To Javascript)</h3>

                    <div className='coinContainer'>
                    <motion.img src={coin} className='coin' animate={{rotateZ: -30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    <motion.img src={coin} className='coin' whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    <motion.img src={coin} className='coin' animate={{rotateZ: 30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                    </div>
                    </a>
                </div>

                <div className='Startracker aquaColor projectsCommon'>
                <a href='https://startracker.sb-dev.nl/index.php' className='projectLinks' title='Star game tracker to track game progress. Made with HTML5/CSS3/Javascript/MYSQL/PHP/Online Database'>
                    <h1 className='starH1 aquaColor'>Startracker</h1>
                    <h3 className='starH3 aquaColor'>(Fullstack project)</h3>

                    <div className='starsContainer'>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars aquaColor' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.2, repeat: Infinity}}></motion.img>

                    </div>
                    </a>
                </div>
                
            </div>
            }
        
        </div>
    );
}

export default Projects;