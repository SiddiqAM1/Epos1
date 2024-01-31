"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import "./areasBox.css"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const truncateDescription = (text:string, maxWords:number) => {
 if(text){
  const words = text.split(" ");
  if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
 }else{
  return
 }
};


const AreasBox = ({name,description,imageUrl,className,index}:any) => {
  const pathName=usePathname()
  useEffect(()=>{
    
      console.log(pathName)
  },[])
  const truncatedDescription=truncateDescription(description,20)
  return (
    <div className={`areasBox ${className} ${pathName=="/" ? "gray-hover" : "white-hover"}`}>
      <div className="areasBox-content">
      <h1 className='areasBox-title'>{name}</h1>
      <div className='areasBox-description'>
        {truncatedDescription}
      </div>
      <Link href={`/areas/${index}`}><div className="areasBox-button">Learn More</div></Link>
      </div>
      <div className='areasBox-img'>
      <img src={imageUrl} alt=""/>
      </div>
    </div>
  )
}

export default AreasBox