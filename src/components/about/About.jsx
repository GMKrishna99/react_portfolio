import React from 'react'
import './About.css'
import Info from '../info/Info'
import AboutImg from '../../assets/About.png'
import CV from '../../assets/GMKrishnaCV.pdf'
const About = () => {
  return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className='about__img'/>

                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                    Front-end Developer , I create web pages with UI / UX , I am Fresher in Developing side , I am learning new things everyday , I am a self learner.
                    builded some projects with Reactjs. Currently learning Backend and i am vey passionate about it.
                    </p>
                    <a download="" href={CV} className="button button--flex">
                        Download CV <i class="uil uil-file-download-alt button_icon"></i>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default About
                            