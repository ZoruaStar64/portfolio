import React, {useState} from 'react';
import '../index.js';
import {FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaTrello, FaGithub, FaFigma} from 'react-icons/fa';
import {SiJavascript, SiMysql, SiPhp, SiAdobexd, SiVisualstudiocode, SiPhpstorm, SiCsharp, SiUnity, SiReact} from 'react-icons/si';

function ToolsSkills({toggleStyle}) {
    return (
        <div>
            
            {/* theme toggle for the tools and skills section */}
            {toggleStyle === 'Light' ?
            <div className='toolsSkills common seperationMargin blueToWhite' id='ToolsAndSkills'>
                
                <div className='codeLanguages'><h1>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
                <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
                <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /><SiCsharp color='#9c75d5' className='toolsSkillsCommon' title='CSharp'/>
                <SiUnity color="black" className='toolsSkillsCommon' title='Unity' /><SiReact color="#5ed3f3" className='toolsSkillsCommon' title='ReactJS' />
                </div>

                <div className='otherTools'><h1>Andere Hulpmiddelen:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
                <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
                <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' />
                </div>

            </div>
            : toggleStyle === 'Dark' ?
            <div className='toolsSkills common seperationMargin BlueToDarkBlue' id='ToolsAndSkills'>
                
                <div className='codeLanguages'><h1 className='whiteText'>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
                <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
                <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /><SiCsharp color='#9c75d5' className='toolsSkillsCommon' title='CSharp'/>
                    <SiUnity color="black" className='toolsSkillsCommon' title='Unity' /><SiReact color="#5ed3f3" className='toolsSkillsCommon' title='ReactJS' /></div>

                <div className='otherTools'><h1 className='whiteText'>Andere Hulpmiddelen:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
                <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
                <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' /></div>

            </div>
            :
            //Default
            <div className='toolsSkills common seperationMargin BlueToDarkBlue' id='ToolsAndSkills'>
                
                <div className='codeLanguages'><h1 className='whiteText'>Code Talen:</h1><FaHtml5 color="#E54C21" className='toolsSkillsCommon' title='HTML5' /><FaCss3Alt color="#304CDC" className='toolsSkillsCommon' title='CSS3' />
                <SiJavascript color="#f7e018" className='toolsSkillsCommon' title='Javascript' /><SiMysql color="#00718b" className='toolsSkillsCommon' title='MySql' /><SiPhp color="#777bb3" className='toolsSkillsCommon' title='PHP' />
                <FaDatabase className='toolsSkillsCommon' title='Database' /><FaJava color="#4f809f" className='toolsSkillsCommon' title='Java' /><SiCsharp color='#9c75d5' className='toolsSkillsCommon' title='CSharp'/>
                    <SiUnity color="black" className='toolsSkillsCommon' title='Unity' /><SiReact color="#5ed3f3" className='toolsSkillsCommon' title='ReactJS' /></div>

                <div className='otherTools'><h1 className='whiteText'>Andere Hulpmiddelen:</h1><SiAdobexd color="#450135" className='toolsSkillsCommon' title='AdobeXD' /><FaFigma color="#ea4c1d" className='toolsSkillsCommon' title='Figma' />
                <FaTrello color="#0d60d6" className='toolsSkillsCommon' title='Trello' /><FaGithub color="#1b1f23" className='toolsSkillsCommon' title='Github' />
                <SiVisualstudiocode color="#3ea6eb" className='toolsSkillsCommon' title='Visual Studio Code (VSC)' /><SiPhpstorm color="#a146ec" className='toolsSkillsCommon' title='PHPStorm' /></div>

            </div>
            }
        
        </div>
    );
}

export default ToolsSkills;