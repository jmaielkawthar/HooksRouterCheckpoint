import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({movie}) => {
    const {id}=useParams()
    // console.log(id)
    const item=movie.find(el=>el.id===id)
    console.log(item)
  return (
    <div className='detailCard'>
        <img src={item.image} alt={item.name} style={{width:"30%"}} />
        <h1>
            {item.name}
        </h1>
    </div>
  )
}

export default Details
