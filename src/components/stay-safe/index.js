import './index.scss';
import React from 'react';

function StaySafe() {

  return (
    <section className="stay-safe">
      <div className="stay-safe-container container py-5">
        <div className="text-center">
          <p className="type-normal-48 primary-font pb-5">¡Stay safe!</p>
          <p className="type-normal-24 secondary-font">Protocolo de higiene y seguridad</p>
        </div>
        <ol>
          <li className="type-normal-18 secondary-font">Portar el cubrebocas el tiempo posible.</li>
          <li className="type-normal-18 secondary-font">Permite que el personal revise tu temperatura a la entrada.</li>
          <li className="type-normal-18 secondary-font">Lava tus manos antes y después de comer o cada vez que te levantes de tu mesa.</li>
          <li className="type-normal-18 secondary-font">Si eres mayor de 18 años, presenta tu certificado de vacunación al ingreso.</li>
          <li className="type-normal-18 secondary-font">Si sientes algún síntoma previo al evento háznoslo saber, nosotros comprenderemos tu ausencia.</li>
        </ol>
      </div>
    </section>
  )
}

export default StaySafe;
