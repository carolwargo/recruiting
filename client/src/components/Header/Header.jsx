import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
import AnimatedHeading from '../Home/AnimatedHeading';
import TopNav from '../Navigation/TopNav';

export default function Header2() {
            
  return (
    <header>
      <TopNav />
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${PinkBlackBG})`, height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='container text-white w3-padding-large'>
          <AnimatedHeading />
          <h2 className='mb-4 mx-5'>
  PROVIDING SPORTS <span className='w3-text-pink' style={{ fontWeight: 'bold' }}>MEDIA, MARKETING & WEB DESIGN </span> 
  FOR ATHLETES, TEAMS & ORGANIZATIONS.
</h2>
 <p className='px-4 w3-hide-small'>Click <span className='w3-text-pink'><i>LEARN MORE</i></span> to explore.</p>
              <button tag="a" className='btn mt-4' size="lg"
               style={{backgroundImage: 'linear-gradient(to right, #f64b65, #fa52ce)'}}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
