import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import '../index.js';
import './body.css';
import imageOfMe from "../images/me5.jpg";
import autismPositives from "../images/autismPositives.jpg";
import dice1 from "../images/Dice1.png";
import dice2 from "../images/Dice2.png";
import dice3 from "../images/Dice3.png";
import dice4 from "../images/Dice4.png";
import dice5 from "../images/Dice5.png";
import dice6 from "../images/Dice6.png";
import coin from "../images/coin.png";
import star from "../images/darkModeButton.png";
import {FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaTrello, FaGithub, FaFigma} from 'react-icons/fa';
import {SiJavascript, SiMysql, SiPhp, SiAdobexd, SiVisualstudiocode, SiPhpstorm} from 'react-icons/si';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { display } from '@mui/system';

/*import currentMode from './header.js';*/

const starsContainer = Document.starsContainer;


function starCreator() {
  let min = 0.5;
  let max = 2;
  let randomDuration = Math.random() * (max - min); 
  const star = <motion.div className='star' animate={{opacity: 0.1}} transition={{repeatDelay: 1, repeat: Infinity, duration: randomDuration}}></motion.div>;

  starsContainer.render(star);
  
}

class Body extends React.Component {



    render() {
     
      /*if (currentMode === 'Light') {
        console.log("it works holy shit (light ver.)")
      } 
      else if (currentMode === 'Dark') {
        console.log("it works holy shit (dark ver.)")
      }*/
      let currentDisplay = 'none';
      let isClicked = false;
      function handleAutism() {
        if (isClicked === false) {
          currentDisplay = 'block';
          isClicked = true;
        }
        else {
          currentDisplay = 'none';
          isClicked = false;
        }
        
      }
      return (
        <div>
          <div className='bodyBackground'>

            <div className='aboutMe seperationMargin common' id='AboutMe'>
              
              <img src={imageOfMe} className='pictureOfMe'></img>
              <img src={autismPositives} className='positivesAutism' onClick={handleAutism}></img>
              <img src={autismPositives} className='positivesAutismClicked' style={{display: currentDisplay}}></img>;
              <div className='introduction'><h1>Introduction</h1>
              <p>Hello! and welcome to my portfolio. My name is Sander Borgman and I was born on the 30th of January 2003<br></br>
              I am an enthousiastic guy when it comes to developing websites and telling about my ideas for various projects.<br></br>
              Other than that I am also diagnosed with ADHD and classic autism.<br></br>(that means I have a part of every type of the autistic spectrum)<br></br>
              If you would like to learn more about the positives of Autism<br></br>
              I recommend clicking on the image under my picture!<br></br>
              When it comes to videogames (especially things about Nintendo or Terraria)<br></br>
              I can talk about it for almost forever</p></div>

              <div className='softAbout'><h1>About me as a Software Developer</h1>
              <p>As of April 2022 I have worked on school projects with languages such as: <br></br>&#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java<br></br> and the creation of a online database!<br></br>
              Aside from those I am currently learning on how to use ReactJS and the Framer library with it.<br></br>
              Afterwards I wish to learn C++ with Unity to be able to create videogames.<br></br>
              as for my skills with the current coding languages:<br></br>
              <div className='skillsSoftAbout'>
              <div className='htmlSoftAbout skillsSoftCommon'>
              <h3>HTML5:</h3> Every single website needs to have some sort of HTML<br></br>
              I mean aren't you looking at a website right now?<br></br>
              Everything you see is some sort of HTML5 element,<br></br>
              be it this text or the box it's inside of!
              </div>
              <div className='cssSoftAbout skillsSoftCommon'>
              <h3>CSS3:</h3> CSS is used to edit HTML elements like color, size and more!<br></br>
              CSS code keeps getting developed further and becoming more awesome<br></br>
              and websites would be impossible without a little bit of CSS magic
              </div>
              <div className='jsSoftAbout skillsSoftCommon'>
              <h3>Javascript:</h3> I would say my skills with Javascript are rather good<br></br>
              I even made my own little project (Yahtzee) with Javascript<br></br>
              This ended up being such a success that my study decided to replace the old Javascript end assignment with mine!
              </div>
              <div className='mysqlSoftAbout skillsSoftCommon'>
              <h3>Mysql:</h3> I'm not the best at making databases but i'd say I made a good one for my Fullstack project<br></br>
              The project is also an assignment I got for school.<br></br>in which I had to utilise all my knowledge that I had at the time<br></br>
              Said Fullstack project is about keeping track of videogame progress<br></br>
              (such as an item you need to combine with another to make a better item)
              </div>
              <div className='phpSoftAbout skillsSoftCommon'>
              <h3>PHP:</h3> As I said at the Mysql section, I made a fullstack project called Startracker.<br></br>
              Which is used to keep track of Videogame progress.<br></br>
              With the help of a database and account creation to store and use said information.
              </div>
              <div className='javaSoftAbout skillsSoftCommon'>
              <h3>Java:</h3> While it has been a while since I coded in Java,<br></br>
              I did convert an old java school assignment to Javascript<br></br>
              (This Project is what I have dubbed: Coin Game.)<br></br>
              (I might however change a certain thing about it to avoid potential copyright)</div>
              </div></p>
              
              <h3>As a note: I am currently nearing the end of my second year of my Software Developer study.</h3></div>

              <div className='hobbyAbout'><h1>My hobbies</h1>
              <p>As hobbies go I currently have 3:<br></br><br></br>

              My favorite being playing videogames.<br></br>
              I just love how much attention and detail goes in every aspect of a videogame:<br></br>
              the Graphics, Enviroment, Music, Story, the characters, the gameplay,<br></br>
              it just all comes together to create an amazing story and experience.
              That's exactly what I want others to experience whenever I create a videogame:<br></br>
              to make them feel the passion that went into such a project and to give them an unforgettable experience.<br></br><br></br>

              My feelings for videogames aside.<br></br>
              I have grown to love coding things and getting better at it day by day<br></br>
              and afterwards learning something new that I can apply to the next project and so on.<br></br><br></br>

              Finally I just like watching videos on youtube and talking with my friends online using Discord.</p></div>

              <div className='social'>Possible social media area? idk</div>
              <div className='CV'>CV PDF link</div>
            </div>

            <div className='toolsSkills common seperationMargin' id='ToolsAndSkills'>
              
              <div className='codeLanguages'><h1>Coding Languages:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
              <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
              <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /></div>

              <div className='otherTools'><h1>Other Tools:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
              <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
              <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' /></div>

            </div>

            <div className='projects common seperationMargin' id='Projects'>

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
                  <a href='http://sander.webdesignborgman.nl/PHP/EXTRA/wario.html' className='projectLinks' title='Wario Coin game Java to Javascript conversion'>
                  <h1 className='coinH1'>Coin Game</h1>
                  <h3 className='coinH3'>(Java To Javascript)</h3>

                  <div className='coinContainer'>
                  <motion.img src={coin} className='coin' animate={{rotateZ: -30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                  <motion.img src={coin} className='coin' whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                  <motion.img src={coin} className='coin' animate={{rotateZ: 30}} whileHover={{opacity: 0.8}} transition={{duration: 1}}></motion.img>
                  </div>
                  </a>
                </div>

                <div className='Startracker projectsCommon'>
                <a href='https://startracker.sb-dev.nl/index.php' className='projectLinks' title='Star game tracker to track game progress. Made with HTML5/CSS3/Javascript/MYSQL/PHP/Online Database'>
                  <h1 className='starH1'>Startracker</h1>
                  <h3 className='starH3'>(Fullstack project)</h3>

                  <div className='starsContainer'>
                    <motion.img src={star} className='stars' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.1, repeat: Infinity}}></motion.img>
                    <motion.img src={star} className='stars' animate={{scale: [0.99, 0.98, 0.97, 0.96, 0.95, 0.96, 0.97, 0.98, 0.99, 1]}} transition={{duration: 1.2, repeat: Infinity}}></motion.img>

                  </div>
                  </a>
                </div>
              
            </div>

            <div className='contactBox common' id='Contact'>
              <h1 className='contactH1'>Contact me</h1>
              <h3 className='contactH3'>Feel free to contact me by sending an E-mail with the form below.</h3>

              <div>
                <form className='formHolder'>
                  <TextField 
                    id='name' 
                    label='Naam' 
                    variant='filled'
                    margin='normal'
                    sx={{mr: 1, width: '49.5%'}}
                    required
                    autoComplete='off'
                  />

                  <TextField 
                    id='email' 
                    label='E-mail' 
                    variant='filled'
                    margin='normal'
                    sx={{width: '49.5%'}}
                    required
                    autoComplete='off'
                  />

                  <TextField 
                    id='subject' 
                    label='Onderwerp' 
                    variant='filled'
                    margin='normal'
                    fullWidth 
                    required
                    autoComplete='off'
                  />

                  <TextField 
                    id='message' 
                    label='Bericht' 
                    variant='filled'
                    margin='normal'
                    multiline
                    fullWidth
                    rows={8}
                    required
                    autoComplete='off'
                  />
                  <Button
                  sx={{backgroundColor: '#6a57FF', color: '#05002E'}}
                  variant='contained'
                  fullWidth
                  >Verzend E-mail</Button>
                </form>
              </div>

            </div>

          </div>
          
        </div>
        
      );
    }
}

export default Body;