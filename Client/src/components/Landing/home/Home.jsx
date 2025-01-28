import React,{useEffect} from 'react'
import Navbar from '../Navbar/Nabvar'
import Hero from '../hero/Hero'
import About from '../About/About'
import Action from '../Action/Action'
import Footer from '../Footer/Footer'
import Contact from '../contact/Contact'


const Home = () => {

   useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
