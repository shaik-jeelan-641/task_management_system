import React from 'react'
import "./action.css"
import { useNavigate } from 'react-router-dom'

const Action = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/signup")
    }
  return (
    <div>
       <section className="cta">
        <h2>Ready to Boost Your Productivity?</h2>
        <p>Join thousands of teams who use our app to achieve their goals faster.</p>
        <button className='btn-primary' onClick={handleNavigate}>Signup</button>
      </section>
    </div>
  )
}

export default Action
