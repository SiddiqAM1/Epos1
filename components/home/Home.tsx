"use client"
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useRef } from 'react'
import AreasBox from "@/components/areas/areasbox/AreasBox"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import bg_1 from "@/public/3.jpg"
import bg_2 from  "@/public/2.jpg"
// import Image from 'next/image'
import grid_1 from "@/public/1.png"
import grid_2 from "@/public/2.jpg"
import grid_3 from "@/public/3.jpg"
import grid_4 from "@/public/4.jpg"
import grid_5 from "@/public/5.jpg"
import grid_6 from "@/public/6.jpg"
import grid_7 from "@/public/7.jpg"
import grid_8 from "@/public/8.png"
import grid_9 from "@/public/9.jpg"
import data from "./assets/data.json"
import Image from 'next/image'
import Link from 'next/link'


const Home = () => {
    const [scale, setScale] = useState(1);
    const homeRef=useRef<HTMLDivElement>(null)
    const areasSectionRef=useRef<HTMLDivElement>(null)
    const aboutSectionRef=useRef<HTMLDivElement>(null)
    useGSAP((context)=>{
        // console.log(context)
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".overlay",{
          background:`transparent`,
          scrollTrigger:{
            trigger:".home-about",
            start: '600px center ',
            // onEnter:console.log("entered"),
            end: 'bottom top',
            toggleActions: "play none none reverse",
            markers:true,
          }
        })
        // gsap.to(".home",{
        //   backgroundImage:`url('../../public/3.jpg'}')`,
        //   scrollTrigger:{
        //     trigger:".home-about",
        //     start: 'top center',
        //     end: 'bottom center',
        //     
        //   },
          
        // })

        gsap.to(".hero", {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".hero",
            start: "-80px top",
            pin: true,
            scrub:true,
            end: `+=${window.innerHeight * 0.6}`,
            // markers: true
          }
        });
        gsap.to(".bg-grid", {
          scale: 1,
          scrollTrigger: {
            trigger: ".wrapper",
            start: "-80px top",
            pin: true,
            scrub:true,
            end: `+=${window.innerHeight * 1.1}`,
            // markers: true
          }
        });

        gsap.to(".animate-area",{
          opacity:1,
          x:0,
          stagger:0.2,
          scrollTrigger:{
            trigger : areasSectionRef.current,
            start:"top 500px",
            end:"bottom center",
            // markers:true,
            toggleActions: "play reverse play reverse",
          }
        })
    },[])
    

    useEffect(() => {
      if(document.querySelector(".animate-area")){
        console.log(document.querySelector(".animate-area"))
      }
      // console.log(data)
      // data.forEach(i=>{
      //   console.log(i)
      // })
        // console.log(areasSectionRef.current?.dataset.background,aboutSectionRef.current?.dataset.background)
        // console.log(bg_1.src,bg_2.src)
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const aboutPosition = + scrollY;
          // console.log(scrollY)

        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className="home-background">
    <div className="overlay">
      
    <div className='home' ref={homeRef}>
      
      <section className="main-wrapper">
      <section className="hero">
        <div className="bg"></div>
        <h1 className='hero-title'>Find Your Perfect PLace in Our Exclusive Listings</h1>
        <div className="hero-buttons">
        <button className="common-hero-btn-1"><Link href="#contact">Register Interest</Link></button>
      <button className="common-hero-btn-2"><Link href="/areas">View Developments</Link></button>
        </div>
      </section>
      <section className="wrapper">
      <section className="bg-grid">

          <img src={grid_1.src} />
          <img src={grid_2.src} />
          <img src={grid_3.src} />
          <img src={grid_4.src} />
          <img src={grid_5.src} />
          <img src={grid_6.src} />
          <img src={grid_7.src} />
          <img src={grid_8.src} />
          <img src={grid_9.src} />

      </section>
    </section>
      </section>
    <div className="home-areas" ref={areasSectionRef}>
     <div className="home-areas-top">
     <p>Developments</p>
      <h1>Featured Projects</h1>
      <p>Discover a selection of premium off-plan and ready-built residential developments in prime locations.</p>
     </div>
      <div className="areasBoxes">
        <AreasBox  name={data[0].name} description={data[0].Description} imageUrl={data[0].Image.url} index={0} className="animate-area"/>
        <AreasBox  name={data[1].name} description={data[1].Description} imageUrl={data[1].Image.url} index={1} className="animate-area"/>
        <AreasBox  name={data[2].name} description={data[2].Description} imageUrl={data[2].Image.url} index={2} className="animate-area"/>
      </div>
    </div>
    <section className="home-about" ref={aboutSectionRef}>
      <p className="home-about-p">Epos Realty</p>
      <h1 className='home-about-title'>DEVELOPING PREMIUM REAL ESTATE SINCE 2002</h1>
      <div className="home-about-desc">Select Group's portfolio comprises over 20 million square feet of award-winning developments, including flagship projects such as Six Senses Residences The Palm, Dubai (UAE), 98 Baker Street (UK) and the master waterfront community development, Peninsula (UAE).

With an established presence in the Middle East & Europe, renowned for outstanding quality and its commitment to excellence, Select Group has earned its reputation as a leading premium real estate developer.</div>
    </section>
    </div>
    </div>
    </div>
  )
}

export default Home