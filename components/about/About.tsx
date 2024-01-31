import React from 'react'
import "./About.css"
import { FaPhoneSquare, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import Ayaz from "./assets/Ayaz.jpeg"
import Humayun from "./assets/Humayun.jpeg"
import CommonHero from '../CommonHero/CommonHero'
import bg from "@/public/5.jpg"

const About = () => {
  return (
    <div className="about" id='about'>
        <CommonHero title="About  the  Team" bg_img={bg.src}/>
    <div className="about-title">
        <span>About</span> Us
    </div>
    <div className="about-text">
    <p>&quot;Welcome to Epos Realty, where over 11 years of real estate expertise meet your property journey. With us, every property tells a unique story, and we're here to help you find yours. Explore homes with character and investments with potential. Get ready for seasoned advice, market insights, and a personalized approach to real estate. Because at Epos Realty, where every story begins here.&quot; For personalized consultations and property details, contact us at: 
    </p>
</div>

    <div className="about-people">
    <div className="about-box">
        <img src={Ayaz.src} alt="" className='about-image' />
        <div className="position">Ayaz Hussain</div>
        <div className="contact-about">
            <a target="_blank" href="tel:+971566623763"><FaPhoneSquare className='contact-about-icon icon-phone'/></a>
            <a target="_blank" href="mailto:ahmedmuhammadsiddiq@gmail.com"><FaRegEnvelope className='contact-about-icon'/></a>
            <a target="_blank" href="https://wa.me/+971566623763"><FaWhatsapp className='contact-about-icon'/></a>
        </div>
    </div>
    <div className="about-box">
        <img src={Humayun.src} alt="" className='about-image' />
        <div className="position">Humayun Hussain</div>
        <div className="contact-about">
            <a target="_blank" href="tel:+971528112709"><FaPhoneSquare className='contact-about-icon icon-phone'/></a>
            <a target="_blank" href="mailto:ahmedmuhammadsiddiq@gmail.com"><FaRegEnvelope className='contact-about-icon'/></a>
            <a target="_blank" href="https://wa.me/+971528112709"><FaWhatsapp className='contact-about-icon'/></a>
        </div>
    </div>
    </div>
</div>
  )
}

export default About