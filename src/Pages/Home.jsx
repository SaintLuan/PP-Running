import React, {useState} from 'react';
// import Competitions from '../components/Competitions';

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Exercises from '../containers/Home/Exercises';
import Hero from '../containers/Home/Hero';
import ExercisesGallery from '../containers/Home/ExercisesGallery';

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <Hero />
      <Exercises />
      <ExercisesGallery />

      <Footer />
    </>
  )
}

export default Home;