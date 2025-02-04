import React from 'react'
import Video from '../../../assets/Video.mp4'
import "./hero.css"
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='hero-container'>
      <div className="image">
        <video src={Video} autoPlay loop muted>video is not supported</video>
      </div>
      <div className="content">
        <h1><span style={{color: "rgb(7, 241, 23)"}}>Simplify task management</span> and prioritize work</h1>
        <p>Asana is the leading software for project management, according to G2¹. See all your work in one place so you can prioritize what matters most.</p>
        <div className="actions">
            <button id='start'onClick={()=>{navigate('/signup')}}>Get Started</button>
            <button id= "Demo" onClick={()=>{navigate('/dashboard')}}> Request a Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
