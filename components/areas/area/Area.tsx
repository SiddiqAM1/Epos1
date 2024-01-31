import React from 'react'
import "./Area.css"
import CommonHero from '@/components/CommonHero/CommonHero'
import data from "../../home/assets/data.json"
import { FiBookOpen } from 'react-icons/fi'

const Area = ({id}:any) => {
  return (
    <div className='area'>
        <CommonHero title={data[id-1].name} bg_img={data[id-1].Image.url}/>
        <div className="area-content">
            <div className="area-description">
                <h1 className='area-title'>{data[id-1].name}</h1>
                <div className="description">{data[id-1].Description}</div>
            </div>
            <div className="area-brochure">
                <FiBookOpen style={{fontSize:"50px"}}/>
                <a className='area-brochure-link' href={data[id-1].BrochureLink}>Download Pdf Brochure</a>
            </div>
            <div className="area-video">
                <iframe style={{width:"100%",height:"100%"}}src={`https://www.youtube.com/embed/${data[id-1].VideoLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Area