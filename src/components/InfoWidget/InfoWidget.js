import React from 'react';
import './InfoWidget.css';

function InfoWidget({ image, alt, text, reverse }) {
  return (
    <div className={`InfoWidget${reverse ? ' reverse' : ''}`}>
      <img src={image} alt={alt} className="InfoWidget-photo" />
      <p>{text}</p>
    </div>
  );
}

export default InfoWidget;
