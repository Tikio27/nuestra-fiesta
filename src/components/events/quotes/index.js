import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Parallax as ScrollParallax } from "react-scroll-parallax";

function Quotes({firstQuote, secondQuote }) {
  return (
    <section className="event__quotes event__section-layout">
      <Parallax strength={-500} bgImage="/assets/img/bg/horoscope2.webp">
        <div className="container">
          <ScrollParallax x={[-150, 0]}>
            <div className="imgBx jarallax">
              <img className="jarallax-img" src='/assets/img/foto3.jpg' />
            </div>
          </ScrollParallax>
          <div className="event__quotes-text">
            <ScrollParallax y={[100, -100]}>
              <div className="content" data-jarallax-element="-200 0">
                <p className="secondary-font type-normal-18">{firstQuote}</p>
              </div>
              {/* <img className="quote-bg" src="/assets/img/frames/quote2.png" /> */}
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
              <img className="jarallax-img" src='/assets/img/foto4.jpg' />
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