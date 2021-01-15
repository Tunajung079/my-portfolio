import React, {useState} from 'react';
import '../App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import InfoSection from './InfoSection/InfoSection';
import { homeObjOne } from './InfoSection/Data';

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