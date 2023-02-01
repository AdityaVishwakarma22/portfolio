import React from 'react';
import './Welcome.css';
import '../pages.css';

const Welcome = () => {
  return (
    <section className='welcome section' id='home'>
        <div className='center'>
          <span className='font'>Aditya Vishwakarma</span>
          <div>
            <p className='about'>I am <b>Web designer</b> and <b>Front End developer</b></p>
          </div>
        </div>
    </section>
  )
}

export default Welcome;