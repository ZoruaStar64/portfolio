import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './components/main.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js'

/*function swapStyleSheet(sheet) {
  document.getElementById("headerStyle").setAttribute("href", sheet);  
  document.getElementById("bodyStyle").setAttribute("href", sheet);  
}

function initate() {
  var style1 = document.getElementById("styleSwitchButton");
  var style2 = document.getElementById("stylesheet2");

  style1.onclick = swapStyleSheet("default.css");
  style2.onclick = swapStyleSheet("dark.css");
}*/

/*const [isActive, setActive] = useState("false");

const handleToggle = () => {
  setActive(!isActive);
};*/

class Page extends React.Component {
    render() {
      return (
        
          <div>
            <div className='navbar'>
            <a className='headerLinks' href='#'>Home</a><a className='headerLinks' href='#AboutMe'>About</a>
            <a className='headerLinks' href='#ToolsAndSkills'>Skills/Tools</a><a className='headerLinks' href='#Projects'>Projects</a>
            <a className='headerLinks' href='#Contact'>Contact</a>
          </div>
        <Header />
        <Body />
        <Footer />
        </div>
      );
    }
}
ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
  