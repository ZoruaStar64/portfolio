import React from 'react';

// This is just the footer really nothing special here tbh
function Footer({toggleStyle}) {
    
    return (
      <div>
      {!toggleStyle ?
      <div className='footer footerLightGradient'>
        <h1 className='footerText'>sb-dev 2022</h1>
        </div>
        :
        <div className='footer blueToDarkBlue'>
        <h1 className='footerText whiteText'>sb-dev 2022</h1>
        </div>
      }
      </div>
    );
}


export default Footer;