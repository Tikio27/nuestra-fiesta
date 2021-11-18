import PropTypes from 'prop-types';
import React from 'react';

export default function InfoCardData({ address, link, location, title, time }) {
  
  return (
    <div className="info-card--content-data p-3">
      <h4 className="info-card--title  text-shadow_border">{title}</h4>
      <h2 className="info-card--location my-2 text-shadow_border">{location}</h2>
      <p className="mb-4 text-shadow_border">{time}</p>
      <p className="info-card--address mb-4 text-shadow_border">{address}</p>
      {link && (
        <a href={link}
          target="_blank"
          className="btn btn-outline-primary link">Abrir Mapa
        </a>
      )}
    </div>
  )
}

InfoCardData.propTypes = {
  address: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string

}