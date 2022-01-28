import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Parallax as ScrollParallax } from "react-scroll-parallax";
import quoteBg from '../../../public/assets/img/bg/celestial-backgrounds-12.jpg'


function Quotes({firstQuote, secondQuote, imgFirstQuote, imgSecondQuote }) {
  return (
    <section className="event__quotes event__section-layout">
      <Parallax strength={300} bgImage={quoteBg} className="event__quotes--bg">
        <div className="container">
          <ScrollParallax x={[-150, 0]}>
            <div className="imgBx jarallax">
              <img className="jarallax-img" src={imgFirstQuote} loading="lazy"/>
            </div>
          </ScrollParallax>
          <div className="event__quotes-text">
            <ScrollParallax y={[100, -100]}>
              <div className="content" data-jarallax-element="-200 0">
                <p className="secondary-font type-normal-18">{firstQuote}</p>
              </div>
            </ScrollParallax>
          </div>
        </div>
        <div className="container">
          <div className="event__quotes-text">
            <ScrollParallax y={[0, -250]}>
              <div className="content" data-jarallax-element="-200 0">
                <p className="secondary-font type-normal-18">{secondQuote}</p>
              </div>
            </ScrollParallax>
          </div>
          <ScrollParallax x={[100, -50]}>
            <div className="imgBx jarallax">
              <img className="jarallax-img" src={imgSecondQuote} loading="lazy"/>
            </div>
          </ScrollParallax>
        </div>
      </Parallax>
    </section>
  )
}

Quotes.propTypes = {
  isMobile: PropTypes.bool,
  firstQuote: PropTypes.string,
  secondQuote: PropTypes.string
}

export default Quotes;