import React from 'react';
import mainphoto from './../../../assets/images/main.png';
import './styles/hero.css'
const Hero = () => {
  return (
    <div className='main'>
      <div>
      <img src={mainphoto} title="mainphoto" />
      </div>
      <div className='submain'>
        <h4>براندات نسائي عالمية</h4>
        <h1>احدث ادوات الجمال</h1>
        <h4>براندات نسلئي عالمية</h4>
        <button>أكتشف الان</button>
      </div>
      
    </div>
    
  )
}

export default Hero;