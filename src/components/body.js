import React, { useState } from 'react';
import '../index.js';
import AboutMe from './aboutMe.js';
import ToolsSkills from '../parts/toolsSkills.js';
import Projects from './projects.js';
import {EmailModalLight, EmailModalDark} from '../parts/emailmodal.js';

function Body({toggleStyle}) {

    return (
    <div>
        {/* Light mode */}
        {!toggleStyle ?
        <div className='bodyBackground whiteToPurple'>
        
            <AboutMe toggleStyle={toggleStyle}></AboutMe>

            <ToolsSkills toggleStyle={toggleStyle}></ToolsSkills>

            <Projects toggleStyle={toggleStyle}></Projects>

            <div className='contactBox common blueToWhite' id='Contact'>
                <h1 className='contactH1'>Contact</h1>
                <h3 className='contactH3'>Voor vragen en/of opmerkingen kan je via dit formulier een e-mail naar mij versturen.</h3>
                <EmailModalLight />
            </div>
        </div> 
        :
        // Dark Mode

        <div className='bodyBackground darkBlueToBlue'>

            <AboutMe toggleStyle={toggleStyle}></AboutMe>

            <ToolsSkills toggleStyle={toggleStyle}></ToolsSkills>

            <Projects toggleStyle={toggleStyle}></Projects>

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