import React, {useState} from 'react';
import '../index.js';
import SkillsAbout from './skillsAbout.js';
import imageOfMe from "../images/me6.png";

function AboutMe({toggleStyle}) {
    return (
        <div>
            
            {/* theme toggle for about me */}
            {toggleStyle === 'Light' ?
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
                    <SkillsAbout toggleStyle={toggleStyle}></SkillsAbout>
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

                    Als laatste vind ik het leuk om video's op YouTube te kijken en te praten met vrienden op Discord.</p>
                </div>

                {/* <div className='social'>Possible social media area? idk</div> */}
                
            </div>
            : toggleStyle === 'Dark' ?
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
                    <SkillsAbout toggleStyle={toggleStyle}></SkillsAbout>
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

                    Als laatste vind ik het leuk om video's op YouTube te kijken en te praten met vrienden op Discord.</p>
                </div>

                {/* <div className='social'>Possible social media area? idk</div> */}
                
            </div>
            :
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
                    <SkillsAbout toggleStyle={toggleStyle}></SkillsAbout>
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

                    Als laatste vind ik het leuk om video's op YouTube te kijken en te praten met vrienden op Discord.</p>
                </div>

                {/* <div className='social'>Possible social media area? idk</div> */}
                
            </div>
            }
        
        </div>
    );
}

export default AboutMe;