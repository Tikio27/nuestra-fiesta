import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Plx from "react-plx";

const heroData = [
  {
    start: "self",
    // startOffset: "30vh",
    duration: "50vh",
    properties: [
      {
        startValue: 0,
        endValue: 0,
        unit: "px",
        property: "translateY"
      },
      {
        startValue: 5,
        endValue: 1,
        property: "scale"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
    ]
  }
];

function QuoteMobile({quote, imgUrl }) {
  return (
    <section className="event__quotes text-white text-center mb-5">
      <div className="quotes_quote_container">
        {/* <Plx parallaxData={contentDataA}> */}
          <div className="quotes_content">
            {/* </Plx> */}
            <Plx parallaxData={heroData}>
              <img className="quotes-img" src={imgUrl} />
            </Plx>
            <div className="quotes_text container p-2">
              <p className="secondary-font type-normal-18">{quote}</p>
            </div>
          </div>
        {/* </Plx> */}
      </div>
    </section>
  )
}

QuoteMobile.propTypes = {
  quote: PropTypes.string,
  imgUrl: PropTypes.string
}

export default QuoteMobile;