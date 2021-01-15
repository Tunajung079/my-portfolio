import React from 'react'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home'
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Home/>
      {/* <About/>
      <Education/>
      <Skill/>
      <Contact/> */}
    </Router>
        
      
    
  )
}

export default App;
