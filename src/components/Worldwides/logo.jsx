
import React from 'react';
import logo1 from '../../assets/1.png';
import logo2 from '../../assets/2.png';
import logo3 from '../../assets/3.png';
import logo4 from '../../assets/4.png';
import logo5 from '../../assets/5.png';
import logo6 from '../../assets/6.png';
import logo7 from '../../assets/7.png';
import logo8 from '../../assets/8.png';
import logo9 from '../../assets/9.png';
import logo10 from '../../assets/10.png';
import logo11 from '../../assets/11.png';
import logo12 from '../../assets/12.png';
import logo13 from '../../assets/13.png';
import logo14 from '../../assets/14.png';
import logo15 from '../../assets/15.png';
import logo16 from '../../assets/16.png';
import logo17 from '../../assets/17.png';
import logo18 from '../../assets/18.png';

import './Logo.css'; // For custom styles

function Logo() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
  ];

  return (
    <div className='main-logo'>
      <h1 className='heading'>Trusted by Over 10,000+ Customers Worldwide</h1>
      <div className='logo-grid'>
        {logos.map((logo, index) => (
          <div key={index} className='logo-item'>
            <img src={logo} alt={`logo ${index + 1}`} className='logo-image' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logo;
