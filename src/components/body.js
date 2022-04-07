import React from 'react';
import ReactDOM from 'react-dom';
import '../index.js';
import './body.css';

class Body extends React.Component {
    render() {
      return (
        <div>
          <div className='bodyBackground'>

            <div className='aboutMe seperationMargin common ' id='AboutMe'>

            </div>

            <div className='toolsSkills common seperationMargin' id='ToolsAndSkills'>

            </div>

            <div className='projects common seperationMargin' id='Projects'>

            </div>

            <div className='contactBox common' id='Contact'>

            </div>

          </div>
          
        </div>
        
      );
    }
}

export default Body;