import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className="about_box ">
            <i class="fa-solid fa-award about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">4 years of work Experience</span>
        </div>
        <div className="about_box">
        <i class="fa-solid fa-briefcase about_icon"></i>
            <h3 className="about_title">complete</h3>
            <span className="about_subtitle">10+ Projects in doing Course</span>
        </div>
        <div className="about_box">
        <i class="fa-solid fa-headset about_icon"></i>
            <h3 className="about_title">Service</h3>
            <span className="about_subtitle">Design & Development</span>
        </div>
    </div>
  )
}

export default Info