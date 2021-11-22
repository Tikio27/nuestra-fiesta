import './index.scss'
import React from 'react';
import Plx from 'react-plx';
import Sparkles from '../sparkle';

export default function StickyText({name, text, textLabel}) {

  const textData = [
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
    {
      start: 'self',
      startOffset: '20vh',
      duration: '200vh',
      // easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: -10,
          endValue: 100,
          unit: 'vh',
          property: 'translateY',
        },
      ],
    },
  ];

  return (
    <Plx
      className='sticky-text'
      parallaxData={ textData }
    >
      
      <div className="sticky-text__container text-shine">
        <Sparkles>
          <p className="sticky-text__name type-bold-48 primary-font text-shadow_border">{name}</p>
          <p className="sticky-text__text type-normal-24 secondary-font text-shadow_border">{text}</p>
          <p className="sticky-text__label type-normal-36 primary-font text-shadow_border">{textLabel}</p>
        </Sparkles>
        </div>
    </Plx>
  );
}