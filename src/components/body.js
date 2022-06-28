import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.js';
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
import {EmailModalLight, EmailModalDark} from './emailmodal.js';

function Body({toggleStyle}) {
      
        // to open the modal for the autism positives thingie
        const [openModal, setOpenmodal] = useState(false);

        const toggleModal = () => {
          setOpenmodal(!openModal);
        }

      return (
        <div>
          {/* Light mode */}
          {!toggleStyle ?
          <div className='bodyBackground whiteToPurple'>
            
            <div className='aboutMe seperationMargin whiteToBlue common' id='AboutMe'>
                   {!openModal ?
                <div className='darkenedClick' style={{display: 'none'}}></div> :
                <div className='darkenedClick' style={{display: 'block'}} onClick={toggleModal}></div>
              }
              <img src={imageOfMe} alt='me infront my pc' className='pictureOfMe'></img>
              <img src={autismPositives} alt='details on the positives of autism' className='positivesAutism' onClick={toggleModal}></img>

              {!openModal ?
                <img src={autismPositives} alt='close up of the autism positives details but it is inactive' className='positivesAutismClicked' style={{display: 'none'}}></img> :
                <img src={autismPositives} alt='close up of the autism positives details but it is active' className='positivesAutismClicked' style={{display: 'block'}} onClick={toggleModal}></img>
              }
              
              <div className='introduction'><h1>Introductie</h1>
              <p>Hoi! en welkom in mijn portfolio. Mijn naam is Sander Borgman and ik ben geboren op 30 Januari 2003<br></br>
              Ik ben een heel enthousiaste persoon als het gaat om mijn ideeën voor websites/games<br></br>
              Daarnaast heb ik Klassiek Autisme en ADHD<br></br>(Klassiek Autisme betekent dat je iets van elk deel uit het autistische spectrum hebt)<br></br>
              Als je meer wilt leren over de positieven van autisme<br></br>
              Dan raad ik aan op het plaatje onder mijn foto te klikken!<br></br>
              Als het gaat om videogames (zodiezo als het om Nintendo of Terraria gaat)<br></br>
              Kan ik er bijna constant over praten</p></div>
              
              <div className='softAbout'><h1 className='softAboutH1MarginTop'>Over mij als een Software Developer</h1>
              <p>Sinds April 2022 heb ik aan vele projecten gewerkt met deze codetalen: <br></br>&#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java,<br></br>de creatie van een online database<br></br>
              en ReactJS!(deze website)<br></br>
              Ik ben nu bezig met het leren van videogames maken in Unity<br></br>
              Daarnaast nog wat opmerkingen van de basis code talen:<br></br>
              <div className='skillsSoftAbout'>
              <div className='htmlSoftAbout skillsSoftCommon'>
              <h3>HTML5:</h3> Elke website heeft wel iets qua HTML nodig.<br></br>
              Want je bent toch nu op een website?<br></br>
              Alles wat je hier ziet is een soort HTML element,<br></br>
              bijvoorbeeld dit text of deze container waar het in zit.
              </div>
              <div className='cssSoftAbout skillsSoftCommon'>
              <h3>CSS3:</h3> CSS wordt gebruikt om een HTML element te bewerken.<br></br>
              CSS code wordt steed verbeterd en steeds cooler!<br></br>
              en websites zouden er natuurlijk niet uit zien zonder wat CSS magie.
              </div>
              <div className='jsSoftAbout skillsSoftCommon'>
              <h3>Javascript:</h3> Ik zou persoonlijk zeggen dat ik best goed in Javascript ben<br></br>
              Ik heb zelfs een project (Yahtzee) met Javascript gemaakt!<br></br>
              Dit werd zelfs zo'n grote success<br></br>Dat mijn opleiding besloot hun Javascript eindopdracht te vervangen met mijn Yahtzee project!
              </div>
              <div className='mysqlSoftAbout skillsSoftCommon'>
              <h3>Mysql:</h3> Ik ben niet de allerbeste in Databases maken,<br></br>maar ik heb best een goeie kunnen maken voor mijn Fullstack project.<br></br>
              Het fullstack project was juist voor mijn opleiding bedoelt als opdracht.<br></br>Waarin ik alle 5 basis code talen moest samen gebruiken.<br></br>
              Het Fullstack project is bedoelt om videogame voortgang zelf te tracken.<br></br>
              (bijvoorbeeld een voorwerp die je later met een andere moet combineren)
              </div>
              <div className='phpSoftAbout skillsSoftCommon'>
              <h3>PHP:</h3> Zoals ik heb gezegd bij het Mysql gedeelte, heb ik een fullstack project gemaakt genaamd Startracker.<br></br>
              die gebruikt wordt om videogame voortgang te tracken.<br></br>
              Met het behulp van formuliers om accounts te creeren in de database waar die info aan vast zit.
              </div>
              <div className='javaSoftAbout skillsSoftCommon'>
              <h3>Java:</h3> Ook al is het een tijd geleden sinds ik Java heb gebruikt,<br></br>
              Ik had wel een Java opdracht van school omgezet in Javascript<br></br>
              (Ik heb deze project Coin Game genoemd.)<br></br>
              (Ik ga waarschijnlijk wel wat veranderen vanwege copyright.)</div>
              </div></p>
              <br></br>
              <h3>Als toevoeging: ik ben nu aan het eind van mijn tweede schooljaar.</h3></div>

              <div className='hobbyAbout'><h1>Mijn hobbies</h1>
              <p>Qua hobbies heb ik er nu 3:<br></br><br></br>

              Mijn favoriet is videogames spelen.<br></br>
              Ik hou er gewoon zoveel van hoeveel aandacht in elk gedeelte van een game gaat:<br></br>
              de Graphics, Omgeving, Muziek, Verhaal, de karakters, de gameplay,<br></br>
              het komt gewoon allemaal bij elkaar om een prachtig verhaal en game te maken.
              en dat is precies wat ik anderen later wil laten voelen zodra ik een game maak:<br></br>
              om ze de passie te laten voelen dat in de game gestoken werd en om ze een onvergetelijke ervaring te geven.<br></br><br></br>

              Naast mijn liefde voor videogames.<br></br>
              Heb ik veel gecode de laatste tijd en ik wordt er steeds beter in<br></br>
              het gevoel om iets nieuws te leren en dat te gebruiken en die irritante bug te fixen is altijd geweldig.<br></br><br></br>

              Als laatste vindt ik het gewoon leuk om videos of youtube te kijken en te praten met vrienden op Discord.</p></div>

              {/* <div className='social'>Possible social media area? idk</div> */}
              
            </div>

            <div className='toolsSkills common seperationMargin blueToWhite' id='ToolsAndSkills'>
              
              <div className='codeLanguages'><h1>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
              <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
              <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /></div>

              <div className='otherTools'><h1>Andere Hulpmiddelen:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
              <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
              <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' /></div>

            </div>

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

            <div className='contactBox common blueToWhite' id='Contact'>
              <h1 className='contactH1'>Neem contact</h1>
              <h3 className='contactH3'>Stuur gerust een E-mail naar mij met de formulier hieronder!</h3>
              <EmailModalLight />
            </div>
          </div> 
          :
          // Dark Mode

            <div className='bodyBackground darkBlueToBlue'>
    
            <div className='aboutMe seperationMargin darkBlueToBlue common' id='AboutMe'>
                    {!openModal ?
                <div className='darkenedClick' style={{display: 'none'}}></div> :
                <div className='darkenedClick' style={{display: 'block'}} onClick={toggleModal}></div>
              }
              <img src={imageOfMe} alt='me infront my pc' className='pictureOfMe'></img>
              <img src={autismPositives} alt='details on the positives of autism' className='positivesAutism' onClick={toggleModal}></img>

              {!openModal ?
                <img src={autismPositives} alt='close up of the autism positives details but it is inactive' className='positivesAutismClicked' style={{display: 'none'}}></img> :
                <img src={autismPositives} alt='close up of the autism positives details but it is active' className='positivesAutismClicked' style={{display: 'block'}} onClick={toggleModal}></img>
              }
              
              <div className='introduction whiteText'><h1>Introductie</h1>
              <p>Hoi! en welkom in mijn portfolio. Mijn naam is Sander Borgman and ik ben geboren op 30 Januari 2003<br></br>
              Ik ben een heel enthousiaste persoon als het gaat om mijn ideeën voor websites/games<br></br>
              Daarnaast heb ik Klassiek Autisme en ADHD<br></br>(Klassiek Autisme betekent dat je iets van elk deel uit het autistische spectrum hebt)<br></br>
              Als je meer wilt leren over de positieven van autisme<br></br>
              Dan raad ik aan op het plaatje onder mijn foto te klikken!<br></br>
              Als het gaat om videogames (zodiezo als het om Nintendo of Terraria gaat)<br></br>
              Kan ik er bijna constant over praten</p></div>

              <div className='softAbout whiteText'><h1 className='softAboutH1MarginTop'>Over mij als een Software Developer</h1>
              <p>Sinds April 2022 heb ik aan vele projecten gewerkt met deze codetalen: <br></br>&#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java,<br></br>de creatie van een online database<br></br>
              en ReactJS!(deze website)<br></br>
              Ik ben nu bezig met het leren van videogames maken in Unity<br></br>
              Daarnaast nog wat opmerkingen van de basis code talen:<br></br>
              <div className='skillsSoftAbout whiteText'>
              <div className='htmlSoftAbout skillsSoftCommon'>
              <h3>HTML5:</h3> Elke website heeft wel iets qua HTML nodig.<br></br>
              Want je bent toch nu op een website?<br></br>
              Alles wat je hier ziet is een soort HTML element,<br></br>
              bijvoorbeeld dit text of deze container waar het in zit.
              </div>
              <div className='cssSoftAbout skillsSoftCommon'>
              <h3>CSS3:</h3> CSS wordt gebruikt om een HTML element te bewerken.<br></br>
              CSS code wordt steed verbeterd en steeds cooler!<br></br>
              en websites zouden er natuurlijk niet uit zien zonder wat CSS magie.
              </div>
              <div className='jsSoftAbout skillsSoftCommon'>
              <h3>Javascript:</h3> Ik zou persoonlijk zeggen dat ik best goed in Javascript ben<br></br>
              Ik heb zelfs een project (Yahtzee) met Javascript gemaakt!<br></br>
              Dit werd zelfs zo'n grote success<br></br>Dat mijn opleiding besloot hun Javascript eindopdracht te vervangen met mijn Yahtzee project!
              </div>
              <div className='mysqlSoftAbout skillsSoftCommon'>
              <h3>Mysql:</h3> Ik ben niet de allerbeste in Databases maken,<br></br>maar ik heb best een goeie kunnen maken voor mijn Fullstack project.<br></br>
              Het fullstack project was juist voor mijn opleiding bedoelt als opdracht.<br></br>Waarin ik alle 5 basis code talen moest samen gebruiken.<br></br>
              Het Fullstack project is bedoelt om videogame voortgang zelf te tracken.<br></br>
              (bijvoorbeeld een voorwerp die je later met een andere moet combineren)
              </div>
              <div className='phpSoftAbout skillsSoftCommon'>
              <h3>PHP:</h3> Zoals ik heb gezegd bij het Mysql gedeelte, heb ik een fullstack project gemaakt genaamd Startracker.<br></br>
              die gebruikt wordt om videogame voortgang te tracken.<br></br>
              Met het behulp van formuliers om accounts te creeren in de database waar die info aan vast zit.
              </div>
              <div className='javaSoftAbout skillsSoftCommon'>
              <h3>Java:</h3> Ook al is het een tijd geleden sinds ik Java heb gebruikt,<br></br>
              Ik had wel een Java opdracht van school omgezet in Javascript<br></br>
              (Ik heb deze project Coin Game genoemd.)<br></br>
              (Ik ga waarschijnlijk wel wat veranderen vanwege copyright.)</div>
              </div></p>
              <br></br>
              <h3 className='whiteText'>Als toevoeging: ik ben nu aan het eind van mijn tweede schooljaar.</h3></div>

              <div className='hobbyAbout whiteText'><h1>My hobbies</h1>
              <p>Qua hobbies heb ik er nu 3:<br></br><br></br>

              Mijn favoriet is videogames spelen.<br></br>
              Ik hou er gewoon zoveel van hoeveel aandacht in elk gedeelte van een game gaat:<br></br>
              de Graphics, Omgeving, Muziek, Verhaal, de karakters, de gameplay,<br></br>
              het komt gewoon allemaal bij elkaar om een prachtig verhaal en game te maken.
              en dat is precies wat ik anderen later wil laten voelen zodra ik een game maak:<br></br>
              om ze de passie te laten voelen dat in de game gestoken werd en om ze een onvergetelijke ervaring te geven.<br></br><br></br>

              Naast mijn liefde voor videogames.<br></br>
              Heb ik veel gecode de laatste tijd en ik wordt er steeds beter in<br></br>
              het gevoel om iets nieuws te leren en dat te gebruiken en die irritante bug te fixen is altijd geweldig.<br></br><br></br>

              Als laatste vindt ik het gewoon leuk om videos of youtube te kijken en te praten met vrienden op Discord.</p></div>

              {/* <div className='social'>Possible social media area? idk</div> */}
              
            </div>

            <div className='toolsSkills common seperationMargin BlueToDarkBlue' id='ToolsAndSkills'>
              
              <div className='codeLanguages'><h1 className='whiteText'>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
              <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
              <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /></div>

              <div className='otherTools'><h1 className='whiteText'>Andere Hulpmiddelen:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
              <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
              <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' /></div>

            </div>

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

            <div className='contactBox common blueToDarkBlue' id='Contact'>
              <h1 className='contactH1 whiteText'>Neem contact</h1>
              <h3 className='contactH3 whiteText'>Stuur gerust een E-mail naar mij met de formulier hieronder!</h3>
              <EmailModalDark />
            </div>
          </div>
}
        </div>  
      );
    }

export default Body;