import React from 'react'
import Image from 'next/image'
import bg_1 from "@/public/3.jpg"
const BackgroundChanger = () => {
  return (
    <div>
        <Image src={bg_1}
         style={{
           zIndex:0,
           position:"fixed",
           top:0,
           left:0,
           objectFit:"cover",
           height:"100%",
           width:"100%",
     }} alt="hello"/>
    </div>
  )
}

export default BackgroundChanger