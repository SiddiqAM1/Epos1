
import React from 'react'
import Area from '@/components/areas/area/Area'

const page = ({params}:any) => {
  return (
   <Area id={params.id}/>

  )
}

export default page
// export default function Page({ params }: { params: { id: string } }) {
//     return <div style={{marginTop:"100px"}}>My Post: {params.id}</div>
//   }