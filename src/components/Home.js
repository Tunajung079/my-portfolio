import React, {useState} from 'react';
import '../App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import { BrowserRouter as Router} from 'react-router-dom';
import InfoSection from './InfoSection/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState( false )

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen}  toggle={toggle} />
        <Navbar toggle={toggle} />
        <InfoSection/>
    </>
  );
}

export default Home;