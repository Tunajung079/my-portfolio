import React from 'react';
import '../App.css';
import me from '../img/me.jpg'


function Home() {
  return (
    <div className="Home">
      <img scr={me} width="300" height="500" className="Home__img"></img>
      I'm Tuna
    </div>
  );
}

export default Home;