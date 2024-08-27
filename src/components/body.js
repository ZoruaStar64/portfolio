import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.js';
import imageOfMe from "../images/me6.png";
import dice1 from "../images/Dice1.png";
import dice2 from "../images/Dice2.png";
import dice3 from "../images/Dice3.png";
import dice4 from "../images/Dice4.png";
import dice5 from "../images/Dice5.png";
import dice6 from "../images/Dice6.png";
import coin from "../images/coin.png";
import star from "../images/darkModeButton.png";
import {FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaTrello, FaGithub, FaFigma} from 'react-icons/fa';
import {SiJavascript, SiMysql, SiPhp, SiAdobexd, SiVisualstudiocode, SiPhpstorm, SiCsharp, SiUnity, SiReact} from 'react-icons/si';
import {EmailModalLight, EmailModalDark} from './emailmodal.js';

function Body({toggleStyle}) {

    return (
    <div>
        {/* Light mode */}
        {!toggleStyle ?
        <div className='bodyBackground whiteToPurple'>
        
        <div className='aboutMe seperationMargin whiteToBlue common' id='AboutMe'>
            <img src={imageOfMe} alt='Picture of me' className='pictureOfMe'></img>
            
            <div className='introduction'><h1>Introductie</h1>
                <p>
                Hoi, welkom op mijn portfolio. Mijn naam is Sander Borgman en ik ben geboren op 30 Januari 2003. Ik ben een heel enthousiast persoon en ik praat graag over mijn ideeën voor websites en games.<br></br><br></br>
                Na het afronden van mijn MBO opleiding (cum laude) tot software developer heb ik besloten om door te gaan naar het HBO waar ik nu HBO software developer - AD volg. Het eerste jaar heb ik goed afgesloten met het maximaal te behalen aantal studiepunten.<br></br>
                <br></br>
                Als je me beter leert kennen zul je merken dat ik nieuwe skills heel snel leer.
                </p>
            </div>
            
            <div className='softAbout'>
                <h1 className='softAboutH1MarginTop'>Mijn skills als een Software Developer</h1>
                <p>Vanaf het begin van mijn MBO tot en met nu heb ik aan veel projecten gewerkt<br></br> met de volgende codetalen: <br></br>
                &#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java,<br></br>
                &#9733; de ontwikkeling van een online database,<br></br>
                &#9733; ReactJS (deze website),<br></br>
                &#9733; Unity en C#.<br></br>
                <br></br><br></br>
                Verder volgen hier nog een aantal opmerkingen over de basis code talen:<br></br>
                </p>
                <div className='skillsSoftAbout'>
                    <div className='htmlSoftAbout skillsSoftCommon'>
                        <h3>HTML5:</h3>
                        <p> Elke website heeft wel iets qua HTML nodig.<br></br>
                        Alles wat je hier ziet is een soort HTML element,<br></br>
                        bijvoorbeeld deze tekst of de container waar het in zit.
                        </p>
                    </div>
                    <div className='cssSoftAbout skillsSoftCommon'>
                        <h3>CSS3:</h3>
                        <p> CSS wordt gebruikt om een HTML element te bewerken.<br></br>
                        CSS code wordt steeds verbeterd en steeds cooler!<br></br>
                        Websites zouden er natuurlijk niet uit zien zonder een beetje CSS magie.
                        </p>
                    </div>
                    <div className='jsSoftAbout skillsSoftCommon'>
                        <h3>Javascript:</h3>
                        <p>Ik vind dat ik best goed in Javascript ben<br></br>
                        Ik heb zelfs een project (Yahtzee) met Javascript gemaakt!<br></br>
                        Dit werd zelfs zo'n groot succes, dat mijn MBO opleiding besloot hun Javascript eindopdracht te vervangen met mijn Yahtzee project!
                        </p>
                    </div>
                    <div className='mysqlSoftAbout skillsSoftCommon'>
                        <h3>Mysql:</h3>
                        <p> Ik ben niet de allerbeste in databases maken, maar ik heb een redelijk goede kunnen maken voor mijn Fullstack project.<br></br>
                        Het Fullstack project was een opdracht van mijn MBO opleiding waarin ik alle 5 basis code talen samen moest gebruiken.<br></br>
                        Als Fullstack project heb ik een database gemaakt die de voortgang van je videogames kan tracken.<br></br>
                        (bijvoorbeeld een voorwerp die je later met een andere moet combineren)
                        </p>
                    </div>
                    <div className='phpSoftAbout skillsSoftCommon'>
                        <h3>PHP:</h3>
                        <p>Zoals ik heb vermeld bij het Mysql gedeelte, heb ik een Fullstack project gemaakt genaamd Startracker,
                        die gebruikt wordt om de voortgang van je videogames te tracken.<br></br>
                        Met behulp van formulieren kan je een account creeren. Daarvoor wordt gebruik gemaakt van informatie uit een database.
                        </p>
                    </div>
                    <div className='javaSoftAbout skillsSoftCommon'>
                        <h3>Java:</h3>
                        <p>Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, die ik later heb omgezet naar Javascript<br></br>
                        (Ik heb deze project Coin Game genoemd.)<br></br>
                        (Ik ga waarschijnlijk wel wat veranderen vanwege copyright op de afbeeldingen.)
                        </p>
                    </div>
                    <div className='cSharpSoftAbout skillsSoftCommon'>
                        <h3>C#:</h3>
                        <p>Tijdens het 3de en 4de periode van mijn 1ste jaar aan mijn Associates Degree opleiding ben ik met een team bezig geweest aan 2 projecten voor school.<br></br>
                        Het 1ste project was een pac-man geinspireerde game waarmee wij met het basis werkte van C# (Console Applicatie).<br></br>
                        Het 2de project is een web-applicatie voor een dierentuin waarin wij CRUD functionaliteiten en meer moeten uitvoeren.<br></br>
                        Als laatste wil ik vermelden dat er een duidelijk verschil is tussen basis C# gebruiken en de C# gebruiken dat binnen Unity gebruikt wordt.
                        </p>
                    </div>
                </div>
                <br></br>
                <h3>Als laatste: <br></br>Ik heb nu mijn eerste schooljaar van mijn Software developer AD (Associates degree) opleiding afgerond met alle (60) studiepunten.<br></br>Op dit moment ben ik opzoek naar een leuke stageplek!</h3>
            </div>

            <div className='hobbyAbout'><h1>Mijn hobbies</h1>
            <p>Ik heb in principe 3 hobbies.<br></br><br></br>

            Mijn favoriete bezigheid is videogames spelen.<br></br>
            Ik hou ervan hoeveel aandacht er is besteed aan elk detail van een game:<br></br>
            de graphics, de spelomgeving, het muziek, het verhaal, de karakters, de gameplay
            en hoe het resulteert in een prachtige videogame.<br></br>
            Dat is precies wat ik anderen later wil laten voelen zodra ik een game maak:
            de passie die in een game gestoken werd en om ze natuurlijk een onvergetelijke ervaring te bezorgen.<br></br><br></br>

            Naast mijn liefde voor videogames, heb ik de laatste tijd veel gecodeerd en ik word er steeds beter in.<br></br>
            Het gevoel om iets nieuws te leren en dat te gebruiken om irritante bugs te fixen is geweldig.<br></br><br></br>

            Als laatste vind ik het leuk om video's op YouTube te kijken en te praten met vrienden op Discord.</p></div>

            {/* <div className='social'>Possible social media area? idk</div> */}
            
        </div>

        <div className='toolsSkills common seperationMargin blueToWhite' id='ToolsAndSkills'>
            
            <div className='codeLanguages'><h1>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
            <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
            <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /><SiCsharp color='#9c75d5' className='toolsSkillsCommon' title='CSharp'/>
            <SiUnity color="black" className='toolsSkillsCommon' title='Unity' /><SiReact color="#5ed3f3" className='toolsSkillsCommon' title='ReactJS' /></div>

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
            <h1 className='contactH1'>Contact</h1>
            <h3 className='contactH3'>Voor vragen en/of opmerkingen kan je via dit formulier een e-mail naar mij versturen.</h3>
            <EmailModalLight />
        </div>
        </div> 
        :
        // Dark Mode

        <div className='bodyBackground darkBlueToBlue'>

        <div className='aboutMe seperationMargin darkBlueToBlue common' id='AboutMe'>
            <img src={imageOfMe} alt='me infront my pc' className='pictureOfMe'></img>
            
            <div className='introduction whiteText'>
                <h1>Introductie</h1>
                <p>
                Hoi, welkom op mijn portfolio. Mijn naam is Sander Borgman en ik ben geboren op 30 Januari 2003. Ik ben een heel enthousiast persoon en ik praat graag over mijn ideeën voor websites en games.<br></br><br></br>
                Na het afronden van mijn MBO opleiding (cum laude) tot software developer heb ik besloten om door te gaan naar het HBO waar ik nu HBO software developer - AD volg. Het eerste jaar heb ik goed afgesloten met het maximaal te behalen aantal studiepunten.<br></br>
                <br></br>
                Als je me beter leert kennen zul je merken dat ik nieuwe skills heel snel leer.
                </p>
            </div>

            <div className='softAbout whiteText'>
                <h1 className='softAboutH1MarginTop'>Mijn skills als een Software Developer</h1>
                <p>Vanaf het begin van mijn MBO tot en met nu heb ik aan veel projecten gewerkt<br></br> met de volgende codetalen: <br></br>
                &#9733; HTML5/CSS3,<br></br>&#9733; Javascript,<br></br>&#9733; Mysql,<br></br>&#9733; PHP,<br></br>&#9733; Java,<br></br>
                &#9733; de ontwikkeling van een online database,<br></br>
                &#9733; ReactJS (deze website),<br></br>
                &#9733; Unity en C#.<br></br>
                <br></br><br></br>
                Verder volgen hier nog een aantal opmerkingen over de basis code talen:<br></br>
                </p>
                <div className='skillsSoftAbout whiteText'>
                    <div className='htmlSoftAbout skillsSoftCommon'>
                        <h3>HTML5:</h3>
                        <p> Elke website heeft wel iets qua HTML nodig.<br></br>
                        Alles wat je hier ziet is een soort HTML element,<br></br>
                        bijvoorbeeld deze tekst of de container waar het in zit.
                        </p>
                    </div>
                    <div className='cssSoftAbout skillsSoftCommon'>
                        <h3>CSS3:</h3>
                        <p> CSS wordt gebruikt om een HTML element te bewerken.<br></br>
                        CSS code wordt steeds verbeterd en steeds cooler!<br></br>
                        Websites zouden er natuurlijk niet uit zien zonder een beetje CSS magie.
                        </p>
                    </div>
                    <div className='jsSoftAbout skillsSoftCommon'>
                        <h3>Javascript:</h3>
                        <p>Ik vind dat ik best goed in Javascript ben<br></br>
                        Ik heb zelfs een project (Yahtzee) met Javascript gemaakt!<br></br>
                        Dit werd zelfs zo'n groot succes, dat mijn MBO opleiding besloot hun Javascript eindopdracht te vervangen met mijn Yahtzee project!
                        </p>
                    </div>
                    <div className='mysqlSoftAbout skillsSoftCommon'>
                        <h3>Mysql:</h3>
                        <p> Ik ben niet de allerbeste in databases maken, maar ik heb een redelijk goede kunnen maken voor mijn Fullstack project.<br></br>
                        Het Fullstack project was een opdracht van mijn MBO opleiding waarin ik alle 5 basis code talen samen moest gebruiken.<br></br>
                        Als Fullstack project heb ik een database gemaakt die de voortgang van je videogames kan tracken.<br></br>
                        (bijvoorbeeld een voorwerp die je later met een andere moet combineren)
                        </p>
                    </div>
                    <div className='phpSoftAbout skillsSoftCommon'>
                        <h3>PHP:</h3>
                        <p>Zoals ik heb vermeld bij het Mysql gedeelte, heb ik een Fullstack project gemaakt genaamd Startracker,
                        die gebruikt wordt om de voortgang van je videogames te tracken.<br></br>
                        Met behulp van formulieren kan je een account creeren. Daarvoor wordt gebruik gemaakt van informatie uit een database.
                        </p>
                    </div>
                    <div className='javaSoftAbout skillsSoftCommon'>
                        <h3>Java:</h3>
                        <p>Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, die ik later heb omgezet naar Javascript<br></br>
                        (Ik heb deze project Coin Game genoemd.)<br></br>
                        (Ik ga waarschijnlijk wel wat veranderen vanwege copyright op de afbeeldingen.)
                        </p>
                    </div>
                    <div className='cSharpSoftAbout skillsSoftCommon'>
                        <h3>C#:</h3>
                        <p>Tijdens het 3de en 4de periode van mijn 1ste jaar aan mijn Associates Degree opleiding ben ik met een team bezig geweest aan 2 projecten voor school.<br></br>
                        Het 1ste project was een pac-man geinspireerde game waarmee wij met het basis werkte van C# (Console Applicatie).<br></br>
                        Het 2de project is een web-applicatie voor een dierentuin waarin wij CRUD functionaliteiten en meer moeten uitvoeren.<br></br>
                        Als laatste wil ik vermelden dat er een duidelijk verschil is tussen basis C# gebruiken en de C# gebruiken dat binnen Unity gebruikt wordt.
                        </p>
                    </div>
                </div>
                <br></br>
                <h3>Als laatste: <br></br>Ik heb nu mijn eerste schooljaar van mijn Software developer AD (Associates degree) opleiding afgerond met alle (60) studiepunten.<br></br>Op dit moment ben ik opzoek naar een leuke stageplek!</h3>
            </div>

            <div className='hobbyAbout whiteText'><h1>Mijn hobbies</h1>
            <p>Ik heb in principe 3 hobbies.<br></br><br></br>

            Mijn favoriete bezigheid is videogames spelen.<br></br>
            Ik hou ervan hoeveel aandacht er is besteed aan elk detail van een game:<br></br>
            de graphics, de spelomgeving, het muziek, het verhaal, de karakters, de gameplay
            en hoe het resulteert in een prachtige videogame.<br></br>
            Dat is precies wat ik anderen later wil laten voelen zodra ik een game maak:
            de passie die in een game gestoken werd en om ze natuurlijk een onvergetelijke ervaring te bezorgen.<br></br><br></br>

            Naast mijn liefde voor videogames, heb ik de laatste tijd veel gecodeerd en ik word er steeds beter in.<br></br>
            Het gevoel om iets nieuws te leren en dat te gebruiken om irritante bugs te fixen is geweldig.<br></br><br></br>

            Als laatste vind ik het leuk om video's op YouTube te kijken en te praten met vrienden op Discord.</p></div>

            {/* <div className='social'>Possible social media area? idk</div> */}
            
        </div>

        <div className='toolsSkills common seperationMargin BlueToDarkBlue' id='ToolsAndSkills'>
            
            <div className='codeLanguages'><h1 className='whiteText'>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
            <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
            <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /><SiCsharp color='#9c75d5' className='toolsSkillsCommon' title='CSharp'/>
                <SiUnity color="black" className='toolsSkillsCommon' title='Unity' /><SiReact color="#5ed3f3" className='toolsSkillsCommon' title='ReactJS' /></div>

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
            <h1 className='contactH1 whiteText'>Contact</h1>
            <h3 className='contactH3 whiteText'>Voor vragen en/of opmerkingen kan je via dit formulier een e-mail naar mij versturen.</h3>
            <EmailModalDark />
        </div>
        </div>
    }
    </div>  
    );
}

export default Body;