import React, {useState} from 'react';
// import Competitions from '../components/Competitions';

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Hero from '../containers/Event/Hero';

function Event() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <Hero />

      {/* <Footer /> */}
    </>
  )
}

export default Event;