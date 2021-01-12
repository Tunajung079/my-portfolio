import React from 'react';
import '../App.css';
import me from './me.jpg'


function Home() {
  return (
    <div className="Home">
      <img src={me} width="300" height="500" className="Home__img"/>
      I'm Tuna
    </div>
  );
}

export default Home;