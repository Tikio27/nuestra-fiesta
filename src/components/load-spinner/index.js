import './index.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import { Hearts } from 'react-loader-spinner';
import Separator from '../utils/separator';

function LoadSpinner() {
  return (
    <div className="event__loader">
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='event__loader-content'>
        <div className="event__loader-container">
          <Separator />
          <div className="pt-4"></div>
          <Hearts arialLabel="loading-indicator" color="#0833A2" width="250" />
          <p className="primary-font type-bold-48 text-3d">Loading...</p>
          <div className="pt-4"></div>
          <Separator />
        </div>
      </div>
    </div>
  )
}

export default LoadSpinner;
