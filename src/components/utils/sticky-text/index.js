import './index.scss'
import React from 'react';
import Plx from 'react-plx';
import Sparkles from '../sparkle';

export default function StickyText({name, text, textLabel}) {

  const textData = [
    {
      start: 'self',
      startOffset: 200,
      duration: 400,
      easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: -100,
          endValue: 400,
          unit: 'px',
          property: 'translateY',
        },
      ],
    },
    {
    start: 'self',
    // startOffset: 200,
    duration: 400,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
        startValue: 0,
        endValue: 100,
        property: 'scaleZ',
      },
    ],
  },
  ];

  return (
    <Plx
      className='sticky-text'
      parallaxData={ textData }
    >
      
      <div className="sticky-text__container p-4 text-shine">
        <Sparkles>
          <p className="sticky-text__name type-bold-72 primary-font text-shadow_border">{name}</p>
          <p className="sticky-text__text type-normal-36 secondary-font text-shadow_border">{text}</p>
          <p className="sticky-text__label type-normal-48 primary-font text-shadow_border">{textLabel}</p>
        </Sparkles>
        </div>
    </Plx>
  );
}