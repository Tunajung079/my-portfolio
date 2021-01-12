import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from '../src/contents/About'
import Contact from '../src/contents/Contact'
import Education from '../src/contents/Education'
import Home from '../src/contents/Home'
import Skill from '../src/contents/Skill'

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div>
        <Home />
        <About />
        <Education />
        <Skill />
        <Contact />
      </div>
    </div>
  )
}

export default App
