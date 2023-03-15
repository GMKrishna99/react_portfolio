import React from 'react';
import Social from '../social/Social';
import Data from '../data/Data';
import './Home.css';
import ScrollAnimation from '../scrollanimation/ScrollAnimation';


const Home = () => {
  return (
   <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                    <Social />
                    <div className="home_img"></div>
                      <Data/>
            </div>
                      <ScrollAnimation/>
        </div>
   </section>
  )
}

export default Home