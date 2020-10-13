import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';
// import landingImg from './images/landing.svg';
// import markerImg from './images/map-marker.svg';


function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Logo" />

        <main>
          <h1>Level felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Hortolândia</strong>
          <span>São Paulo</span>
        </div>

        <a href="hi" className="enter-app">
          &gt;
        </a>
      </div>
    </div>
  );
}

export default App;
