import React from 'react'
import "./section.css"

const Section = ({data}) => {
  return (
    <div className='card'>
        <img src={data.src} alt="" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
  )
}

export default Section
