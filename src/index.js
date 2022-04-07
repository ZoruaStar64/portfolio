import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './index.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js'

class Page extends React.Component {
    render() {
      return (
          <div>
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
  