import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import '../index.js';
import './body.css';
import imageOfMe from "../images/me5.jpg";
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
      
      return (
        <div>
          <div className='bodyBackground'>

            <div className='aboutMe seperationMargin common' id='AboutMe'>
              <img src={imageOfMe} className='pictureOfMe'></img>
              
              <div className='introduction'><h1>Introduction</h1>
              <p>Hello! and welcome to my portfolio. My name is Sander Borgman and I was born on the 30th of January 2003<br></br>
              I am an enthousiastic guy when it comes to developing websites and telling about my ideas for various projects.<br></br>
              Other than that I am also diagnosed with ADHD and classic autism. (that means I have a part of every type of the autistic spectrum)<br></br>
              Because I could get distracted easily I take some medication to reduce those effects.<br></br>other than that I pay close attention to details like the positioning of certain elements.<br></br>
              When it comes to videogames (especially things about Nintendo or Terraria) I can talk about it for almost forever</p></div>

              <div className='softAbout'><h1>About me as a Software Developer</h1>
              <p>As of April 2022 I have worked on school projects with languages such as: <br></br>&#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java<br></br> and the creation of a online database!<br></br>
              Aside from those I am currently learning on how to use ReactJS and the Framer library with it.<br></br>
              Afterwards I wish to learn C++ with Unity to be able to create videogames.<br></br>
              If I had to give an out of 5 score on my skills with the main coding languages i'd say:<br></br>
              HTML5: 4/5<br></br>
              CSS3: 3/5 (can definitely learn more as there's so many posibilities still undiscovered for me)<br></br>
              Javascript: 5/5 (I actually made a project using Javascript that became a replacement for an older school assignment this project will be in the Projects area on here as well)<br></br>
              Mysql: ?/5 (I am not to certain what to score this since Mysql is mainly a type of database)<br></br>
              PHP: 3/5 (I did make a huge Fullstack project but I feel like I could learn much more)<br></br>
              Java: 3/5 (it's been a while since i've coded Java so i'm most likely quite rusty when it comes to Java)</p>
              <h3>As a note: I am by no means a professional at coding,<br></br> I am currently nearing the end of my second year of my Software Developer study.<br></br>
              So these scores are purely with the fact in mind that I am a second year student.</h3></div>

              <div className='hobbyAbout'><h1>My hobbies</h1>
              <p>As hobbies go I currently have 3:<br></br><br></br>

              My favorite being playing videogames.<br></br>
              I just love how much attention and detail goes in every aspect of a videogame: the Graphics, Enviroment, Music, Story, the characters, the gameplay,<br></br>it just all comes together to create an amazing story and experience.
                That's exactly what I want others to experience whenever I create a videogame:<br></br> to make them feel the passion that went into such a project and to give them an unforgettable experience.<br></br><br></br>

              My feelings for videogames aside I have grown to love coding things and getting better at it day by day<br></br>
              and afterwards learning something new that I can apply to the next project and so on.<br></br><br></br>

              Finally I just like watching videos on youtube and talking with my friends online using Discord.</p></div>

              <div className='social'>Possible social media area? idk</div>
              <div className='CV'>CV PDF link</div>
            </div>

            <div className='toolsSkills common seperationMargin' id='ToolsAndSkills'>
              
              <div className='codeLanguages'><h1>Coding Languages:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' />
              <SiJavascript color="#f7e018" className='toolsSkillsCommon' /><SiMysql color="#00718b" className='toolsSkillsCommon' /><SiPhp color="#777bb3" className='toolsSkillsCommon' />
              <FaDatabase className='toolsSkillsCommon' /><FaJava color="#4f809f" className='toolsSkillsCommon' /></div>

              <div className='otherTools'><h1>Other Tools:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' />
              <FaTrello color="#0d60d6" className='toolsSkillsCommon' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' />
              <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' /></div>

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
              <h1 className='ContactH1'>Contact me</h1>
              <p className='ContactText'>Feel free to contact me by sending an E-mail with the form below.<br></br>
              Example reasons: a question or hiring me.</p>

              <div>Placeholder Form area</div>

            </div>

          </div>
          
        </div>
        
      );
    }
}

export default Body;