import './index.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoCardData from './infoCardData';

export default function InfoCardEvent({ ceremony, cocktail }) {
  const [isChecked, setIsChecked] = useState(false);
  ceremony = { "link": "https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821", "title": "Ceremonia Religiosa", "address": "C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.", "time": "06:00 PM", "location": "Emporio Salon de Eventos" };
  cocktail = { "address": "C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.", "location": "Emporio Salon de Eventos", "link": "https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821", "title": "Recepción", "time": "07:00 PM" };
  console.log(JSON.stringify(ceremony));
  console.log(`Cocktail: ${JSON.stringify(cocktail)}`);
  
  function _handleChange(event) {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <div className={`info-card-event over-hide ${isChecked ? 'is-checked' : ''}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center align-self-center py-2">
              <div className="text-center py-5 py-md-0">
                <input className="info-card-checkbox" type="checkbox" id="card-checkbox" name="card-checkbox"
                  defaultChecked={isChecked}
                  onChange={_handleChange} />
                <label htmlFor="card-checkbox">
                  <span className="block-diff">Ceremonia</span>
                  <span className="float-right">Recepción</span>
                </label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="info-card-wrap">
                        <div className="img-wrap img-center">
                          <img className="img-shine" src="/assets/img/ceremony/card/rayos.png" alt="" />
                          <img className="img-layer" src="/assets/img/ceremony/card/layer2.png" alt="" />
                          <img className="img-next" src="/assets/img/ceremony/card/next-slide.png" alt="" />
                          <img className="img-decoration-left" src="/assets/img/ceremony/card/left.png" alt="" />
                          <img className="img-decoration-right" src="/assets/img/ceremony/card/right.png" alt="" />
                          <img className="img-cruz" src="/assets/img/ceremony/card/cruz.png" alt="" />
                        </div>
                        <InfoCardData
                          address={ceremony.address}
                          link={ceremony.link}
                          location={ceremony.location}
                          title={ceremony.title}
                          time={ceremony.time}
                        />
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="info-card-wrap">
                        <div className="img-wrap img-cocktail-bg" />
                        <div className="img-wrap img-roller">
                          <img src="/assets/img/cocktail/card/roller.png" alt="" />
                        </div>
                        <div className="img-wrap img-notes">
                          <img className="img-note img-note--one" src="/assets/img/cocktail/card/nota.png" alt="" />
                          <img className="img-note img-note--two" src="/assets/img/cocktail/card/nota2.png" alt="" />
                          <img className="img-note img-note--three" src="/assets/img/cocktail/card/nota.png" alt="" />
                          <img className="img-note img-note--four" src="/assets/img/cocktail/card/nota2.png" alt="" />
                        </div>
                        <div className="img-wrap img-rings">
                          <img className="img-ring img-ring--bottom-one" src="/assets/img/cocktail/card/ring1.png" alt="" />
                          <img className="img-ring img-ring--bottom-two" src="/assets/img/cocktail/card/ring2.png" alt="" />
                          <img className="img-ring img-ring--bottom-three" src="/assets/img/cocktail/card/ring3.png" alt="" />
                          <img className="img-ring-top img-ring--top-one" src="/assets/img/cocktail/card/top-ring1.png" alt="" />
                          <img className="img-ring-top img-ring--top-two" src="/assets/img/cocktail/card/top-ring2.png" alt="" />
                          <img className="img-ring-top img-ring--top-three" src="/assets/img/cocktail/card/top-ring3.png" alt="" />
                        </div>
                        {/* <div className="img-wrap img-cocktail-gifts">
                          <img src="/assets/img/cocktail/gifts.png" alt="" />
                        </div> */}
                        {/* <div className="img-wrap img-cocktail-ballons">
                          <img className="ballon-left-1" src="/assets/img/cocktail/ballon-left1.png" alt="" />
                          <img className="ballon-left-2" src="/assets/img/cocktail/ballon-left2.png" alt="" />
                          <img className="ballon-left-3" src="/assets/img/cocktail/ballon-left3.png" alt="" />
                          <img className="ballon-right-1" src="/assets/img/cocktail/ballon-right1.png" alt="" />
                          <img className="ballon-right-2" src="/assets/img/cocktail/ballon-right2.png" alt="" />
                          <img className="ballon-right-3" src="/assets/img/cocktail/ballon-right3.png" alt="" />
                        </div> */}
                        <InfoCardData
                          address={cocktail.address}
                          link={cocktail.link}
                          location={cocktail.location}
                          title={cocktail.title}
                          time={cocktail.time}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

InfoCardEvent.propTypes = {
  ceremony: PropTypes.shape({
    title: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string
  }),
  cocktail: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string
  })
}
