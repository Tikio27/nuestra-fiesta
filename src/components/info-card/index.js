import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import InfoCardData from './infoCardData';

export default function InfoCard({ ceremony, cocktail }) {

  return (
    <>
      <div className="info-card over-hide">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center align-self-center py-2">
              <div className="text-center py-5 py-md-0">
                <input className="info-card-checkbox" type="checkbox" id="card-checkbox" name="card-checkbox" />
                <label htmlFor="card-checkbox">
                  <span className="block-diff">Ceremonia</span>
                  <span className="float-right">Recepción</span>
                </label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="info-card-wrap">
                        <div className="img-wrap img-center">
                          <img className="img-decoration-left" src="/assets/img/ceremony/collection/left-decoration.png" alt="" />
                          <img className="img-decoration-right" src="/assets/img/ceremony/collection/right-decoration.png" alt="" />
                          <img className="img-cruz" src="/assets/img/ceremony/collection/cruz.png" alt="" />
                        </div>
                        <div className="img-wrap img-lines">
                          <img src="/assets/img/ceremony/collection/lines.png" alt="" />
                        </div>
                        <div className="img-wrap img-branches">
                          <img className="img-left-branch1" src="/assets/img/ceremony/collection/left-branch1.png" alt="" />
                          <img className="img-left-branch2" src="/assets/img/ceremony/collection/left-branch2.png" alt="" />
                          <img className="img-right-branch1" src="/assets/img/ceremony/collection/right-branch1.png" alt="" />
                          <img className="img-right-branch2" src="/assets/img/ceremony/collection/right-branch2.png" alt="" />
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
                        <div className="img-wrap img-cocktail-bg">
                          <img src="/assets/img/bg/blue-bg.png" alt=""/>
                        </div>
                        <div className="img-wrap img-cocktail-gifts">
                          <img src="/assets/img/cocktail/gifts.png" alt="" />
                        </div>
                        <div className="img-wrap img-cocktail-ballons">
                          <img className="ballon-left-1" src="/assets/img/cocktail/ballon-left1.png" alt="" />
                          <img className="ballon-left-2" src="/assets/img/cocktail/ballon-left2.png" alt="" />
                          <img className="ballon-left-3" src="/assets/img/cocktail/ballon-left3.png" alt="" />
                          <img className="ballon-right-1" src="/assets/img/cocktail/ballon-right1.png" alt="" />
                          <img className="ballon-right-2" src="/assets/img/cocktail/ballon-right2.png" alt="" />
                          <img className="ballon-right-3" src="/assets/img/cocktail/ballon-right3.png" alt="" />
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

InfoCard.propTypes = {
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
