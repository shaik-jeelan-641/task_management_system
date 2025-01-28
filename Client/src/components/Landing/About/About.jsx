import React from 'react'
import {Data} from './data/Data'
import Section from './section/Section'
import "./about.css"

const About = () => {
  return (
    <div className="about">
         <h1 className="section-title">Why Choose Us?</h1>

    <div className='about-container'>
    
      {Data.map((item) => {
        return <Section data ={item} />
      })}
    </div>
    
    </div>
  )
}

export default About
