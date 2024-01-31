// "use client"
import React, { useState } from 'react'
import "./Areas.css"

import AreasBox from '../areasbox/AreasBox'
import data from "../../home/assets/data.json"
import CommonHero from '@/components/CommonHero/CommonHero'
import bg from "@/public/9.jpg"

const Areas = () => {
//   const [searchValue,setSearchValue]=useState("")
//   const filteredData = data.filter((el) => {
//     //if no input the return the original
//     if (searchValue === '') {
//         return el;
//     }
//     //return the item which contains the user input
//     else {
//         return el.name.toLowerCase().includes(searchValue.trim())
//     }
// })
// let inputHandler = (e:any) => {
//   //convert input text to lower case
//   var lowerCase = e.target.value.toLowerCase();
//   setSearchValue(lowerCase);
// };
  return (
    <div className="areas">
        <CommonHero bg_img={bg.src} title="Developments"/>
       {/* <div className="searchbar">
       <label >Search :</label>
        <input type="text" onChange={inputHandler} value={searchValue} style={{background:"red"}} />
       </div> */}
        <div className='areas-areasBoxes'>
    {data.map((area,index)=>(
        <AreasBox name={area.name} imageUrl={area.Image.url} description={area.Description} index={index+1}  key={index}/>
    ))}
    </div>
</div>
  )
}

export default Areas