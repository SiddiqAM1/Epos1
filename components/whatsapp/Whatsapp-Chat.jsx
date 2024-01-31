import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import "./Whatsapp.css"

const Whatsapp = () => {
  return (
    <div className='whatsapp'><a  target="_blank" href="https://wa.me/+971566623763"><FaWhatsapp className='whatsapp-icon'/></a></div>
  )
}

export default Whatsapp