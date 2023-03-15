import React from 'react'
import namaskar from '../../../src/assets/namskar.png'

const Data = () => {
  return (
   <div className="home_data">
    <h1 className="home_title">
      Mohan Krishna 
      <img src={namaskar} alt="" />
    </h1>
    <h3 className="home_subtitle">Front-end Web Developer</h3>
    <p className="home_description">
      I am a Front-end Web Developer with a passion for creating beautiful and
      functional websites. I have a strong background in HTML, CSS, and
      JavaScript and. I am also familiar with React, Redux, and Node.js. I am
    </p>
    <a href="#contact" className='button button--flex'>
      Say Hello <i class="uil uil-message button_icon"></i>
    </a>
   </div>
  )
}

export default Data