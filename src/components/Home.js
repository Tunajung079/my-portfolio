import React, {useState} from 'react';
import '../App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import InfoSection from './InfoSection/InfoSection';
import About from './About/About';
import Education from './Education/Education';
import Skill from './Skill/Skill';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState( false )

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        {/* <Sidebar isOpen={isOpen}  toggle={toggle} /> */}
        <Navbar toggle={toggle} />
        <InfoSection/>
        <About/>
        <Education/>
        <Skill/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default Home;