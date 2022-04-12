import React from 'react';
import ReactDOM from 'react-dom';
import '../index.js';
import './body.css';
import imageOfMe from "../images/me5.jpg";

class Body extends React.Component {
    render() {
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
              <h2>As a note: I am by no means a professional at coding,<br></br> I am currently nearing the end of my second year of my Software Developer study.<br></br>
              So these scores are purely with the fact in mind that I am a second year student.</h2></div>

              <div className='hobbyAbout'><h1>My hobbies</h1>
              <p>As hobbies go I currently have 3:<br></br><br></br>

              My favorite being playing videogames.<br></br>
              I just love how much attention and detail goes in every aspect of a videogame: the Graphics, Enviroment, Music, Story, the characters, the gameplay,<br></br>it just all comes together to create an amazing story and experience<br></br>
              and that's exactly what I want others to experience whenever I create a videogame. To make them feel the passion that went into such a project and an unforgettable experience.<br></br><br></br>

              My feelings for videogames aside I have grown to love coding things and getting better at it day by day<br></br>
              And afterwards learning something new that I can apply to the next project and so on.<br></br><br></br>

              Finally I just like watching videos on youtube and talking with my friends online using Discord</p></div>

              <div className='social'>Possible social media area? idk</div>
              <div className='CV'>CV PDF link</div>
            </div>

            <div className='toolsSkills common seperationMargin' id='ToolsAndSkills'>
              
              <div className='codeLanguages'><h1>Coding Languages:</h1> (insert coding languages here)</div>

              <div className='otherTools'><h1>Other Tools:</h1> (insert Tools such as Adobe XD/Trello here)</div>

            </div>

            <div className='projects common seperationMargin' id='Projects'>

                <div className='Yahtzee projectsCommon'>
                  <h1>Yahtzee</h1>
                  <h3>(Javascript)</h3>
                  
                </div>

                <div className='coinGame projectsCommon'>
                  <h1>Coin Game</h1>
                  <h3>(Java To Javascript)</h3>
                  
                </div>

                <div className='Startracker projectsCommon'>
                  <h1>Startracker</h1>
                  <h3>(Fullstack project)</h3>
                  
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