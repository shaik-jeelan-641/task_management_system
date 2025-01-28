import React from 'react'
import Navbar from '../Navbar/Nabvar'
import Hero from '../hero/Hero'
import About from '../About/About'
import Action from '../Action/Action'
import Footer from '../Footer/Footer'
import Contact from '../contact/Contact'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Action/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
