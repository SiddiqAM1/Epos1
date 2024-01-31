"use client"
import React, { useEffect, useState } from 'react'
import { FaBars , FaTimes} from 'react-icons/fa' 
import "./Navbar.css"
import Link from 'next/link'

const Navbar = () => {
    const [lastScrollY,setLastScrollY] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState({top:"0px"});
    const [isNavbarOpen,setIsNavbarOpen] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY>window.innerHeight*1.1){
                if(currentScrollY > lastScrollY){
                    setNavbarStyle({top:"-80px"})
                }else{
                    setNavbarStyle({top:"0px"})
                }
            }
            

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[lastScrollY
    ])
    const toggleSidebar = ()=>{
        setIsNavbarOpen(!isNavbarOpen)
    }
  return (
    <nav className='navbar' style={navbarStyle}>
        <div className="navbar-logo">
            <Link href="/"><h1>EPOS</h1></Link>
        </div>

        <ul className='navbar-nav'>
            <li className='navbar-item'><Link className='nav-links' href="/">Home</Link> </li>
            <li className='navbar-item'><Link className='nav-links' href="/about">About</Link></li>
            <li className='navbar-item'><Link className='nav-links' href="/areas">Areas</Link></li>
            <li className='navbar-item'><Link className='nav-links' href="/developers">Developers</Link></li>
        </ul>

        <div className="navbar-cta">
        <span className="navbar-cta-num"><a target='_blank' href="tel:+971566623763">+971566623763</a></span>
            <div className="navbar-cta-btn">
                <button>
                <Link href="#contact">Get in Touch</Link>
                </button>
            </div>
           
        </div>
        <FaBars className='hamburger' onClick={toggleSidebar}/>
        <div className={`sidebar ${isNavbarOpen ? 'active' : ""}`}>
        <ul className='sidebar-nav'>
            <li className='sidebar-item'><Link className='nav-links' href="/">Home</Link> </li>
            <li className='sidebar-item'><Link className='nav-links' href="/about">About</Link></li>
            <li className='sidebar-item'><Link className='nav-links' href="/areas">Areas</Link></li>
            <li className='sidebar-item'><Link className='nav-links' href="/developers">Developers</Link></li>
        </ul>

        <div className="sidebar-cta">
        <span className="sidebar-cta-num"><a target='_blank' href="tel:+971566623763">+971566623763</a></span>
            <div className="sidebar-cta-btn">
                <button>
                <Link href="#contact">Get in Touch</Link>
                </button>
            </div>
        </div>
        <FaTimes className='cross' onClick={toggleSidebar}/>
        </div>
        
    </nav>
  )
}

export default Navbar