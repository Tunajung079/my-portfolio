import React from 'react'
import About from '../contents/About'
import Contact from '../contents/Contact'
import Education from '../contents/Education'
import Home from '../contents/Home'
import Skill from '../contents/Skill'

const Navbar = () => {
  return (
    <div className='Navbar'>
       WebDev 
     <ul>
      <li>
        Home
      </li>
      <li>
        About
      </li>
      <li>
        Education
      </li>
      <li>
        Skill
      </li>
      <li>
        Contact
      </li>
     </ul>
    </div>

    
  )
}

export default Navbar
