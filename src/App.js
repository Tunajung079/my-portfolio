import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Home from './components/Home'
import Skill from './components/Skill'


const App = () => {
  return (
    <Router>
      <Navbar />
      <About/>
      <Education/>
      <Skill/>
      <Contact/>
    </Router>
        
      
    
  )
}

export default App
