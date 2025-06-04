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
                &#9733; Rust.<br></br>
                <br></br><br></br>
                Verder volgen hier een aantal projecten waar ik aan gewerkt heb en wat ik daar geleerd heb:<br></br>
                </p>
                <div className='skillsSoftAbout'>
                    <div className='e-wiseSoftAbout skillsSoftCommon'>
                        <h3>E-Wise (Laravel):</h3>
                        <p>
                            Voordat ik bij E-Wise stageliep heb ik tijdens de zomervakantie van 2022 een oefeningproject gedaan waarin ik de basis van Laravel geleerd heb.<br></br>
                            Ik gebruikte de TechStack van Laravel, Tailwindcss, PHPUnit en Vite tijdens dit project.<br></br>
                            Terwijl ik bij E-Wise stageliep heb ik aan de backend gewerkt met Laravel, PHPUnit en AlpineJS.<br></br>
                            Dit is samen gedaan in teamverband met een aantal E-Wise medewerkers, gebruikmakend van de Scrum methode.
                        </p>
                    </div>
                    <div className='pvAlmereSoftAbout skillsSoftCommon'>
                        <h3>Personeelsvereniging Almere (HTML, CSS, JS, MYSQL, PHP & meer):</h3>
                        <p> 
                            Tijdens het 1ste schooljaar van mijn Associates Degree studie hebben ik en 3 klasgenoten gewerkt aan een nieuwe Personeelsvereniging website voor de gemeente Almere.<br></br>
                            Mijn contributies aan tijdens dit project lagen vooral aan de backend, met een klein beetje frontend.<br></br>
                            Waar ik de meeste tijd aan bestede waren Mollie voor betaalformulieren en PHPSpreadsheet<br></br> 
                            om met weinig moeite hun Database te kunnen exporteren als een Excel bestand en het te kunnen updaten met gebruik van de Excelsheets die zij geleverd krijgen.<br></br>
                            Het importeer proces kijkt zorgvuldig of er nieuwe leden aangemaakt moeten worden, leden moet verwijderen of de gegevens van leden uit de database moet updaten.<br></br>
                            Nadat het project vanuit school eindigde was ik persoonlijk nog niet helemaal tevreden over de kwaliteit van het product dat wij achterlieten.<br></br>
                            Vanwege deze reden had ik aangeboden om tijdens de zomervakantie een paar extra updates uit te voeren, alhoewel ik kreeg afentoe een aantal verzoeken om nog een aantal dingen toe te voegen of aan te passen.<br></br>
                            Dit zorgde er voor dat het meer een impromptu zomerbaantje werd. Ik vond dit niet al te erg, omdat ik hierdoor tijdens de zomervakantie kon werken aan het communiceren met een klant.
                        </p>
                    </div>
                    <div className='geckotechSoftAbout skillsSoftCommon'>
                        <h3>GeckoTech (Rust, Actix Web, HTMX en Tera):</h3>
                        <p>
                            Tijdens het 2de schooljaar van mijn Associates Degree opleiding heb ik samen met een klasgenoot stagegelopen bij GeckoTech.
                            Wij moesten hier meet een compleet nieuwe TechStack werken bestaand uit: Rust, Actix Web, Tera en HTMX.<br></br>
                            Het was voor ons beide een lastige taak, maar uiteindelijk snapte wij hoe de vier verschillende onderdelen van onze TechStack samenwerkten.
                            Wij werkte om de beurt aan een verschillende kant (Front/Back-end) van de applicatie, om zo een gevoel te krijgen voor beide gedeeltes van Rust.<br></br>
                            Tijdens dit hebben wij ook geleerd hoe verschillende soorten testen werktten (unit tests, Integration tests en End-to-end tests).
                        </p>
                    </div>
                    <div className='databaseSoftAbout skillsSoftCommon'>
                        <h3>Databases maken:</h3>
                        <p>
                            Voor de vele projecten waar ik aan gewerkt heb, heb ik ook de gelegenheid gehad om voor deze projecten databases te maken.<br></br>
                            Ik heb voor mijn Fullstack project (Startracker) een database gemaakt, waarin gebruikers een account kunnen aanmaken en verzamelde voorwerpen kunnen markeren als gevonden.<br></br>
                            Voor E-Wise heb ik ook een database gemaakt (onder begeleiding van een Senior developer) voor de Turtlebank V2 project. Hierdoor heb ik wat meer geleerd over hoe je goed databases in elkaar moet zetten.<br></br>
                            Tijdens het maken van de vernieuwde Personeelsvereniging website van de gemeente Almere heb ik samen met een klasgenoot aan een database gewerkt.<br></br> 
                            Alhoewel er later vanuit mij veel updates eraan kwamen vanwege nieuwe toevoegingen/informatie.
                        </p>
                    </div>
                    <div className='cSharpSoftAbout skillsSoftCommon'>
                        <h3>C#/Unity:</h3>
                        <p>
                            De eerste keer dat ik in aanraking met C# kwam was toen ik tijdens mijn MBO opleiding aan het keuzedeel Basis programmeren van videogames werkte.<br></br>
                            Hierbij heb ik geleerd hoe ik met Unity moest omgaan en met Visual Studio C# code kon creeren, alhoewel Unity's C# heel erg verschilt van de normale C#.<br></br>
                            Deze project hou ik voor nu liever prive, omdat ik van plan ben om het als een complete videogame series te maken.<br></br>
                            Daarintegen ben ik wel van plan om binnen de "Projects" gedeelte van deze website het zijn eigen plaats te geven die continu updates zal krijgen.<br></br>
                            Naast mijn Unity project heb ik nog aan twee andere projecten gewerkt, deze keren binnen een team van 4 medestudenten (inclusief mijzelf).<br></br>
                            Tijdens de 3rde periode binnen het 1ste jaar van mijn HBO opleiding hadden wij gewerkt aan een basis C# spel als een console applicatie.<br></br>
                            Het spel zou origineel vele groter zijn, maar in verband met de tijd besloten wij het te houden als een recreatie van pac-man.<br></br>
                            Binnen de "Projects" gedeelte zal er hier ook een vakje voor bestaan waarin het de originele concept van het spel zal uitleggen.<br></br>
                            Tijdens de 4de periode van hetzelfde schooljaar moesten wij een web-applicatie maken voor een fictieve dierentuin.<br></br>
                            De TechStack die wij hierbij moesten gebruiken was: C#, .Net en een SQLite database (i.v.m de volgende regel tekst).<br></br>
                            Wij moesten ook gebruik maken van Docker, GitHub Actions en Yaml om het project te kunnen verbinden met een Kubernetes cluster van de opleiding.<br></br>
                            Ik was tijdens deze periode een van de weinige die enigzins snapte hoe het verbinden aan het cluster werkte.<br></br>
                            Dit kwam voornamelijk omdat ik meerdere dagen tot 17:00 op school bleef, meerdere vragen aan de docenten stelde en heel, heel veel onderzoek.<br></br>
                            Na al dit kwam ik iniedergeval het verschil tussen C# en Unity's C# goed tegen.
                        </p>
                    </div>
                    <div className='miscSoftAbout skillsSoftCommon'>
                        <h3>Misc:</h3>
                        <p>
                            Hier volgt een snelle opsomming van overige dingen die ik gedaan heb:<br></br>
                            1: Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, deze heb ik later omgezet naar Javascript<br></br>
                            2: Tijdens de MBO opleiding kwam ik erachter dat alle code van de Javascript module's eindopdracht (Memory) publiekelijk op een van de docent's website's stond.<br></br>
                            Ik had destijds bedoelt om de code als een hulpmiddel te gebruiken, maar uiteindelijk was het vrijwel klakkeloos overgekopieerd.<br></br>
                            Hier voelde ik mij niet trots op, dus ik besloot een compleet nieuwe project te maken gebaseerd op Yathzee.<br></br>
                            De docenten waren positief onder de indruk, zo positief dat ze zelfs besloten de originele opdracht te vervangen met mijn idee, en ik kreeg een cijfer boven de hoogste die te behalen was in het systeem.
                        </p>
                    </div>
                </div>
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
                &#9733; Rust.<br></br>
                <br></br><br></br>
                Verder volgen hier een aantal projecten waar ik aan gewerkt heb en wat ik daar geleerd heb:<br></br>
                </p>
                <div className='skillsSoftAbout whiteText'>
                    <div className='e-wiseSoftAbout skillsSoftCommon'>
                        <h3>E-Wise (Laravel):</h3>
                        <p>
                            Voordat ik bij E-Wise stageliep heb ik tijdens de zomervakantie van 2022 een oefeningproject gedaan waarin ik de basis van Laravel geleerd heb.<br></br>
                            Ik gebruikte de TechStack van Laravel, Tailwindcss, PHPUnit en Vite tijdens dit project.<br></br>
                            Terwijl ik bij E-Wise stageliep heb ik aan de backend gewerkt met Laravel, PHPUnit en AlpineJS.<br></br>
                            Dit is samen gedaan in teamverband met een aantal E-Wise medewerkers, gebruikmakend van de Scrum methode.
                        </p>
                    </div>
                    <div className='pvAlmereSoftAbout skillsSoftCommon'>
                        <h3>Personeelsvereniging Almere (HTML, CSS, JS, MYSQL, PHP & meer):</h3>
                        <p> 
                            Tijdens het 1ste schooljaar van mijn Associates Degree studie hebben ik en 3 klasgenoten gewerkt aan een nieuwe Personeelsvereniging website voor de gemeente Almere.<br></br>
                            Mijn contributies aan tijdens dit project lagen vooral aan de backend, met een klein beetje frontend.<br></br>
                            Waar ik de meeste tijd aan bestede waren Mollie voor betaalformulieren en PHPSpreadsheet<br></br> 
                            om met weinig moeite hun Database te kunnen exporteren als een Excel bestand en het te kunnen updaten met gebruik van de Excelsheets die zij geleverd krijgen.<br></br>
                            Het importeer proces kijkt zorgvuldig of er nieuwe leden aangemaakt moeten worden, leden moet verwijderen of de gegevens van leden uit de database moet updaten.<br></br>
                            Nadat het project vanuit school eindigde was ik persoonlijk nog niet helemaal tevreden over de kwaliteit van het product dat wij achterlieten.<br></br>
                            Vanwege deze reden had ik aangeboden om tijdens de zomervakantie een paar extra updates uit te voeren, alhoewel ik kreeg afentoe een aantal verzoeken om nog een aantal dingen toe te voegen of aan te passen.<br></br>
                            Dit zorgde er voor dat het meer een impromptu zomerbaantje werd. Ik vond dit niet al te erg, omdat ik hierdoor tijdens de zomervakantie kon werken aan het communiceren met een klant.
                        </p>
                    </div>
                    <div className='geckotechSoftAbout skillsSoftCommon'>
                        <h3>GeckoTech (Rust, Actix Web, HTMX en Tera):</h3>
                        <p>
                            Tijdens het 2de schooljaar van mijn Associates Degree opleiding heb ik samen met een klasgenoot stagegelopen bij GeckoTech.
                            Wij moesten hier meet een compleet nieuwe TechStack werken bestaand uit: Rust, Actix Web, Tera en HTMX.<br></br>
                            Het was voor ons beide een lastige taak, maar uiteindelijk snapte wij hoe de vier verschillende onderdelen van onze TechStack samenwerkten.
                            Wij werkte om de beurt aan een verschillende kant (Front/Back-end) van de applicatie, om zo een gevoel te krijgen voor beide gedeeltes van Rust.<br></br>
                            Tijdens dit hebben wij ook geleerd hoe verschillende soorten testen werktten (unit tests, Integration tests en End-to-end tests).
                        </p>
                    </div>
                    <div className='databaseSoftAbout skillsSoftCommon'>
                        <h3>Databases maken:</h3>
                        <p>
                            Voor de vele projecten waar ik aan gewerkt heb, heb ik ook de gelegenheid gehad om voor deze projecten databases te maken.<br></br>
                            Ik heb voor mijn Fullstack project (Startracker) een database gemaakt, waarin gebruikers een account kunnen aanmaken en verzamelde voorwerpen kunnen markeren als gevonden.<br></br>
                            Voor E-Wise heb ik ook een database gemaakt (onder begeleiding van een Senior developer) voor de Turtlebank V2 project. Hierdoor heb ik wat meer geleerd over hoe je goed databases in elkaar moet zetten.<br></br>
                            Tijdens het maken van de vernieuwde Personeelsvereniging website van de gemeente Almere heb ik samen met een klasgenoot aan een database gewerkt.<br></br> 
                            Alhoewel er later vanuit mij veel updates eraan kwamen vanwege nieuwe toevoegingen/informatie.
                        </p>
                    </div>
                    <div className='cSharpSoftAbout skillsSoftCommon'>
                        <h3>C#/Unity:</h3>
                        <p>
                            De eerste keer dat ik in aanraking met C# kwam was toen ik tijdens mijn MBO opleiding aan het keuzedeel Basis programmeren van videogames werkte.<br></br>
                            Hierbij heb ik geleerd hoe ik met Unity moest omgaan en met Visual Studio C# code kon creeren, alhoewel Unity's C# heel erg verschilt van de normale C#.<br></br>
                            Deze project hou ik voor nu liever prive, omdat ik van plan ben om het als een complete videogame series te maken.<br></br>
                            Daarintegen ben ik wel van plan om binnen de "Projects" gedeelte van deze website het zijn eigen plaats te geven die continu updates zal krijgen.<br></br>
                            Naast mijn Unity project heb ik nog aan twee andere projecten gewerkt, deze keren binnen een team van 4 medestudenten (inclusief mijzelf).<br></br>
                            Tijdens de 3rde periode binnen het 1ste jaar van mijn HBO opleiding hadden wij gewerkt aan een basis C# spel als een console applicatie.<br></br>
                            Het spel zou origineel vele groter zijn, maar in verband met de tijd besloten wij het te houden als een recreatie van pac-man.<br></br>
                            Binnen de "Projects" gedeelte zal er hier ook een vakje voor bestaan waarin het de originele concept van het spel zal uitleggen.<br></br>
                            Tijdens de 4de periode van hetzelfde schooljaar moesten wij een web-applicatie maken voor een fictieve dierentuin.<br></br>
                            De TechStack die wij hierbij moesten gebruiken was: C#, .Net en een SQLite database (i.v.m de volgende regel tekst).<br></br>
                            Wij moesten ook gebruik maken van Docker, GitHub Actions en Yaml om het project te kunnen verbinden met een Kubernetes cluster van de opleiding.<br></br>
                            Ik was tijdens deze periode een van de weinige die enigzins snapte hoe het verbinden aan het cluster werkte.<br></br>
                            Dit kwam voornamelijk omdat ik meerdere dagen tot 17:00 op school bleef, meerdere vragen aan de docenten stelde en heel, heel veel onderzoek.<br></br>
                            Na al dit kwam ik iniedergeval het verschil tussen C# en Unity's C# goed tegen.
                        </p>
                    </div>
                    <div className='miscSoftAbout skillsSoftCommon'>
                        <h3>Misc:</h3>
                        <p>
                            Hier volgt een snelle opsomming van overige dingen die ik gedaan heb:<br></br>
                            1: Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, deze heb ik later omgezet naar Javascript<br></br>
                            2: Tijdens de MBO opleiding kwam ik erachter dat alle code van de Javascript module's eindopdracht (Memory) publiekelijk op een van de docent's website's stond.<br></br>
                            Ik had destijds bedoelt om de code als een hulpmiddel te gebruiken, maar uiteindelijk was het vrijwel klakkeloos overgekopieerd.<br></br>
                            Hier voelde ik mij niet trots op, dus ik besloot een compleet nieuwe project te maken gebaseerd op Yathzee.<br></br>
                            De docenten waren positief onder de indruk, zo positief dat ze zelfs besloten de originele opdracht te vervangen met mijn idee, en ik kreeg een cijfer boven de hoogste die te behalen was in het systeem.
                        </p>
                    </div>
                </div>
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