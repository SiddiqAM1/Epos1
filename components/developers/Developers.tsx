import React from 'react'
import "./Developers.css"
import data from "../home/assets/data.json"
import AreasBox from '../areas/areasbox/areasBox'
import CommonHero from '../CommonHero/CommonHero'
import "../home/Home.css"
import Damac from "./assets/Damac.jpg"
import Emaar from "./assets/emaar.png"
import Nakheel from "./assets/Nakheel.png"
import Sobha from "./assets/Sobha.png"
import Select from "./assets/Select.jpg"
import Danube from "./assets/Danube.png"
import Omniyat from "./assets/Omniyat.png"
import Deyaar from "./assets/Deyaar.png"
import bg from "@/public/7.jpg"




const Developers = () => {
  return (
    <div className='developers'>
        <CommonHero title="Developers of Dubai" bg_img={bg.src}/>
        <div className="dev-images">
        <div className="image">
          <a href="https://www.damacproperties.com/en/"><img src={Damac.src} alt="" /></a>
          
        </div>
        <div className="image">
          <a href="https://www.nakheel.com/"><img src={Nakheel.src} alt="" /></a>
          
        </div>
        <div className="image">
          <a href="https://www.sobha.com/"><img src={Sobha.src} alt="" /></a>
          
        </div>
        <div className="image">
          <a href="https://www.aldanube.com/"><img src={Danube.src} alt="" /></a>
          
        </div>
        <div className="image">
          <a href="https://www.emaar.com/"><img src={Emaar.src} alt="" /></a>
          
        </div>

        <div className="image">
          <a href="https://www.omniyat.com/"><img src={Omniyat.src} alt="" /></a>
          
        </div>

        <div className="image">
          <a href="https://www.deyaar.ae/en/"><img src={Deyaar.src} alt="" /></a>
        </div>

        <div className="image">
          
          <a href="https://www.select-group.ae/"><img src={Select.src} alt="" /></a>
        </div>

      </div>
    </div>
  )
}

export default Developers