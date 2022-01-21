import './index.scss'
import React from 'react';
import Plx from 'react-plx';
import Sparkles from '../sparkle';

export default function StickyText({name, text, textLabel}) {

  const textData = [
    {
      "start": "self",
      "duration": "80vh",
      "properties": [
        {
          "startValue": 0,
          "endValue": 1,
          "property": "opacity"
        },
        {
          "startValue": -80,
          "endValue": 20,
          "unit": "vh",
          "property": "translateY"
        }
      ]
    },
    {
      "start": "self",
      "startOffset": "80vh",
      "duration": "150vh",
      "properties": [
        {
          "startValue": 20,
          "endValue": 120,
          "unit": "vh",
          "property": "translateY"
        }
      ]
    }
  ];

  return (
    <Plx
      className='sticky-text'
      parallaxData={textData}
    >
      
      <div className="sticky-text__container text-shine">
        <Sparkles>
          <p className="sticky-text__name type-bold-36 primary-font text-shadow_border">{name}</p>
          <p className="sticky-text__text type-normal-24 secondary-font text-shadow_border">{text}</p>
          <p className="sticky-text__label type-normal-36 primary-font text-shadow_border">{textLabel}</p>
        </Sparkles>
        </div>
    </Plx>
  );
}