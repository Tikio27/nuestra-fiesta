import './index.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoCardData from './infoCardData';
import imgShine from '../../../public/assets/img/ceremony/card/rayos.png';
import imgLayer from '../../../public/assets/img/ceremony/card/layer2.png';
import imgNext from '../../../public/assets/img/ceremony/card/next-slide.png';
import imgDecorationLeft from '../../../public/assets/img/ceremony/card/left.png';
import imgDecorationRight from '../../../public/assets/img/ceremony/card/right.png';
import imgCruz from '../../../public/assets/img/ceremony/card/cruz.png';
import imgRoller from '../../../public/assets/img/cocktail/card/roller.png';
import imgNote from '../../../public/assets/img/cocktail/card/nota.png';
import imgNote2 from '../../../public/assets/img/cocktail/card/nota2.png';
import imgRingBottomOne from '../../../public/assets/img/cocktail/card/ring1.png';
import imgRingBottomTwo from '../../../public/assets/img/cocktail/card/ring2.png';
import imgRingBottomThree from '../../../public/assets/img/cocktail/card/ring3.png';
import imgRingTopOne from '../../../public/assets/img/cocktail/card/top-ring1.png';
import imgRingTopTwo from '../../../public/assets/img/cocktail/card/top-ring2.png';
import imgRingTopThree from '../../../public/assets/img/cocktail/card/top-ring3.png';
export default function InfoCardEvent({ ceremony, cocktail }) {
  const [isChecked, setIsChecked] = useState(false);

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
                          <img className="img-shine" src={imgShine} alt="" loading="lazy"/>
                          <img className="img-layer" src={imgLayer} alt="" loading="lazy"/>
                          <img className="img-next" src={imgNext} alt="" loading="lazy"/>
                          <img className="img-decoration-left" src={imgDecorationLeft} alt="" loading="lazy"/>
                          <img className="img-decoration-right" src={imgDecorationRight} alt="" loading="lazy"/>
                          <img className="img-cruz" src={imgCruz} alt="" loading="lazy"/>
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
                          <img src={imgRoller} alt="" loading="lazy"/>
                        </div>
                        <div className="img-wrap img-notes">
                          <img className="img-note img-note--one" src={imgNote} alt="" loading="lazy"/>
                          <img className="img-note img-note--two" src={imgNote2} alt="" loading="lazy"/>
                          <img className="img-note img-note--three" src={imgNote} alt="" loading="lazy"/>
                          <img className="img-note img-note--four" src={imgNote2} alt="" loading="lazy"/>
                        </div>
                        <div className="img-wrap img-rings">
                          <img className="img-ring img-ring--bottom-one" src={imgRingBottomOne} alt="" loading="lazy"/>
                          <img className="img-ring img-ring--bottom-two" src={imgRingBottomTwo} alt="" loading="lazy"/>
                          <img className="img-ring img-ring--bottom-three" src={imgRingBottomThree} alt="" loading="lazy"/>
                          <img className="img-ring-top img-ring--top-one" src={imgRingTopOne} alt="" loading="lazy"/>
                          <img className="img-ring-top img-ring--top-two" src={imgRingTopTwo} alt="" loading="lazy"/>
                          <img className="img-ring-top img-ring--top-three" src={imgRingTopThree} alt="" loading="lazy"/>
                        </div>
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
