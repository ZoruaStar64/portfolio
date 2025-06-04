import React, {useState} from 'react';
import '../index.js';

function Navbar({toggleStyle}) {
    return (
        <div>
            
            {/* theme toggle for navbar */}
            {toggleStyle === 'Light' ?
            <div className='navbar navLightGradient'>
                <a className='headerLinks navLinkColorLight' href='#'>Home</a><a className='headerLinks navLinkColorLight' href='#AboutMe'>About</a>
                <a className='headerLinks navLinkColorLight' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorLight' href='#Projects'>Projects</a>
                <a className='headerLinks navLinkColorLight' href='#Contact'>Contact</a>
            </div>
            : toggleStyle === 'Dark' ?
            <div className='navbar navDarkGradient'>
                <a className='headerLinks navLinkColorDark' href='#'>Home</a><a className='headerLinks navLinkColorDark' href='#AboutMe'>About</a>
                <a className='headerLinks navLinkColorDark' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorDark' href='#Projects'>Projects</a>
                <a className='headerLinks navLinkColorDark' href='#Contact'>Contact</a>
            </div>
            :
            //Default
            <div className='navbar navDarkGradient'>
                <a className='headerLinks navLinkColorDark' href='#'>Home</a><a className='headerLinks navLinkColorDark' href='#AboutMe'>About</a>
                <a className='headerLinks navLinkColorDark' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks navLinkColorDark' href='#Projects'>Projects</a>
                <a className='headerLinks navLinkColorDark' href='#Contact'>Contact</a>
            </div>
            }
        
        </div>
    );
}

export default Navbar;