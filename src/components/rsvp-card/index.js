import './index.scss';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function RsvpCard({ guestId, eventId, eventData}) {
  return (
    <div>
      <div className="rsvp">
        <div className="container">
          <div className="rsvp__content p--lg-5 p-2 text-center">
            <div className="text-white text-shadow_border">
              <p className="type-normal-36 primary-font ">Confirma tu asistencia</p>
              <p className="type-normal-48 primary-font ">RSVP</p>
              <p className="type-normal-24 primary-font ">El regalo es opcional, pero lo más importante para mi, es tu compañía.</p>
              <p className="type-normal-24 primary-font ">Espero de corazón puedas acompañarme. Por favor confirma tu asistencia para agregarte a mi lista de invitados y enviarte tu pase digital para el evento.</p>
            </div>
            {guestId && (
              <Button variant="outline-primary" onClick={handleShow}>Confirma tu Asistencia</Button>
            )}
            {!guestId && (
              <a href="https://wa.me/523338147840?text=Hola%21%20confirmo%20mi%20asistencia%20a%20los%20XV%27s%20de%20Camila&lang=es"
                target="_blank"
                className="btn btn-light btn-lg">Confirma tu Asistencia</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RsvpCard
