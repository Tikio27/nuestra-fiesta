import './index.scss';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RsvpCard({ guestId, eventId, eventData}) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const guestData = eventData.guests.find(element => element['id'] === guestId);
  // console.log(guestData.admissions);
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
              <a href="https://wa.me/523338454848?text=I'm%20interested%20in%20your%20car%20for%20sale&lang=es"
                target="_blank"
                className="btn btn-dark">Confirma tu Asistencia</a>
            )}
          </div>
        </div>
      </div>
      {guestId && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cuentas con {guestData.admissions} ingresos, favor de registrar los nombres de las personas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              {guestData &&
                [...Array(guestData.admissions)].map((x, i) =>
                  <Form.Group key={i} controlId={`name${i + 1}`} className="py-1">
                    <Form.Label>{i + 1}) Nombre: </Form.Label>
                    <Form.Control as="input" type="text" placeholder="Ingresa el nombre" required />
                    <Form.Control.Feedback type="invalid">
                      Favor de ingresar un nombre valido
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              <div className="py-3">
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" type="submit" className="ms-3">
                  Enviar Registro
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      )}
        
    </div>
  )
}

export default RsvpCard
