import React, { Component } from 'react'
import Navitems from './Navitems'

const Navbar = () => {
  return (
    <div>
      <Navbar className='Navbar'>
        <Navbar.Link href='/'>Home</Navbar.Link>
        <Navbar.Link href='/'>About</Navbar.Link>
        <Navbar.Link href='/'>Education</Navbar.Link>
        <Navbar.Link href='/'>Skill</Navbar.Link>
        <Navbar.Link href='/'>Contact</Navbar.Link>
      </Navbar>
    </div>
  )
}

export default Navbar
