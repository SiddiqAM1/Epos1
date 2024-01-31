import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import logo from "./logo.png"
import Image from 'next/image'
import Link from 'next/link'



 const Footer = () => {
  return (
    // <div classNameName='footer-main'>
    //     <div classNameName="footer">
    //         <div classNameName="box-footer-2">
    //             <img src={logo.src} alt="" style={{width:"200px",height:"200px",}} />
    //         </div>
    //     <div classNameName="box-footer">
    //     <h3>Explore Properties</h3>
    //         <ul>
    //             <li>Off Plan Projects in Dubai</li>
    //             <li>Dubai Apartments for Sale</li>
    //             <li>Dubai Villas For Sale</li>
    //         </ul>
    //     </div>
    //     <div classNameName="box-footer">
    //     <h3>Links</h3>
    //         <ul>
    //             <li><a href="#about">About</a></li>
    //             <li> <a href="#contact">Contact</a></li>

    //             <li> <a href="#Areas">Areas</a></li>
    //         </ul>
    //     </div>
    //     <div classNameName="box-footer box-footer-contact ">
    //     <h3>Contact Us</h3>
            
    //             <div><span>Phone:</span>+971 56 662 3763 <span>&</span> +971 52 811 2709</div>
    //             <div><span>Email: </span>Humayunhussain18@gmail.com <span>&</span> ayazhussain273@gmail.com </div>


    //     </div>
    //     </div>

    //     <div classNameName='hr-div'>
    //     <hr />
    //     </div>

    //     <div classNameName="footer-second">
    //     <p>© Copyright 2023 Epos Realty - All Rights Reserved</p>
        
    //     <div classNameName="socials">
    //         <a href="https://www.tiktok.com/@epos_realty"><FaTiktok classNameName='icon'/></a>
    //         <a href=""> <FaWhatsapp classNameName='icon'/></a>
    //         <a href="https://www.instagram.com/epos_realty/?igshid=MWVybnNmeXF6ZTF2dw%3D%3D"><FaInstagram classNameName='icon'/></a>
    //         <a href="https://www.youtube.com/@Epos-Realty"><FaYoutube classNameName='icon'/></a>
    //     </div>
    //     </div>
    // </div>
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
         <Link href='/'><Image src={logo} alt="" /></Link>
        </div>
        <div className="media-icons">
          <a href=""><FaFacebook className="icons"/></a>
          <a href="https://www.instagram.com/epos_realty/?igshid=MWVybnNmeXF6ZTF2dw%3D%3D"><FaInstagram className="icons"/></a>
          <a href="https://www.youtube.com/@Epos-Realty"><FaYoutube className="icons"/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Links</li>
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/areas">Areas</a></li>
          <li><a href="/developers">Developers</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Explore Properties</li>
                <li><a>Off Plan Projects in Dubai</a></li>
                <li><a>Dubai Apartments for Sale</a></li>
                <li><a>Dubai Villas For Sale</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Contact Details</li>
          <li><a href="tel:+971566623763">Phone: +971 56 662 3763</a></li>
          <li><a href="tel:+971528112709">Phone: +971 52 811 2709</a></li>
          <li><a href="mailto:Humayunhussain18@gmail.com">Email: Humayunhussain18@gmail.com</a></li>
          <li><a href="mailto:ayazhussain273@gmail.com">Email: ayazhussain273@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="#">CodingLab.</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
