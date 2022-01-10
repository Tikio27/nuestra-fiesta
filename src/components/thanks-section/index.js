import './index.scss';
import React from 'react';
// import Plx from "react-plx";
// import Circle from './circle';
import ParticlesBg from 'particles-bg';
import icon from './icon';

function Thanks() {

  let config = {
    num: [4, 7],
    rps: 0.5,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: 'all',
    color: ["random", "#000000", "#000000", "#00ff00", "#0000ff"],
    cross: 'dead',
    random: 10,
  };

  return (
    <div className='thanks-section'>
      <div className='thanks-container'>
        <div>
          <p>Ana Leonor Peña Parra</p>
          <p>Hannya Sofia Morelia De La Rosa</p>
          <p>Aylin Parra Gonzalez</p>
          <p>Carlos Daniel Rodriguez Torres</p>
        </div>
        <ParticlesBg type="custom" config={config} bg={true} className="thanks-particles" />
      </div>
    </div>
  )
}

export default Thanks;
