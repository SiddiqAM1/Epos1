import React from 'react'
import "./CommonHero.css"
import Link from 'next/link'


const CommonHero = ({bg_img,title}:any) => {
  return (
    <div className="common-hero-overlay" style={{backgroundImage:`url(${bg_img})`,height:"auto",position:"relative"}}>
      {/* <div className="bg"></div> */}
    <section className="common-hero">
    <h1 className='common-hero-title'>{title}</h1>
    <div className="common-hero-buttons">
      <button className="common-hero-btn-1"><Link href="#contact">Register Interest</Link></button>
      <button className="common-hero-btn-2"><Link href="/areas">View Developments</Link></button>
    </div>
  </section>
  </div>
  )
}

export default CommonHero