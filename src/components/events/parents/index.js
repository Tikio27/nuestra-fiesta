import './index.scss';
import React from "react";

export default function Events({parents, godparents}) {
  return (
    <div style={{ position: "relative" }} className="parents-container">
      <div
        style={{
          width: "80%",
          position: "absolute",
          top: "25%",
          marginLeft: "10%",
          textAlign: "center"
        }}
      >
        <div className="event__parents-content text-center blur-text">
          <p className="parents-title secondary-font text-shadow_border text-white type-bold-24">Con la bendicion de Dios y de mis Padres</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.father}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.mother}</p>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          position: "absolute",
          top: "50%",
          marginLeft: "10%",
          textAlign: "center"
        }}
      >
        <div className="event__parents-content text-center blur-text-godparents mt-5">
          <p className="parents-title secondary-font text-shadow_border type-bold-24">Y la compañia de mis padrinos</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godFather}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godMother}</p>
        </div>
      </div>
      <div className="blur-plx">
        <div className="background-image" />
      </div>
    </div>
  );
};
