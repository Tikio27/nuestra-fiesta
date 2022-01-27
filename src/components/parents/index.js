import './index.scss';
import React from "react";

export default function Events({parents, godparents}) {
  return (
    <div style={{ position: "relative" }} className="parents-container">
      <div
        style={{
          width: "90%",
          position: "absolute",
          top: "20%",
          marginLeft: "5%",
          textAlign: "center"
        }}
      >
        <div className="event__parents-content text-center blur-text">
          <p className="parents-title secondary-font text-shadow_border text-white type-bold-18">Con la bendicion de Dios y de mis Padres</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.mother}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.father}</p>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          position: "absolute",
          top: "50%",
          marginLeft: "5%",
          textAlign: "center"
        }}
      >
        <div className="event__parents-content text-center blur-text">
          <p className="parents-title secondary-font text-shadow_border type-bold-18">Y la compañia de mis padrinos</p>
          {/* <p className="parents-title secondary-font text-shadow_border type-bold-18">Quinceaños</p> */}
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godMother}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godFather}</p>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          position: "absolute",
          top: "70%",
          marginLeft: "5%",
          textAlign: "center"
        }}
      >
        <div className="event__parents-content text-center blur-text mt-5">
          <p className="parents-title secondary-font text-shadow_border type-bold-18">Brindis</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">Sara Rodriguez</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">Daniel Resendis</p>
        </div>
      </div>
      <div className="blur-plx">
        <div className="background-image" />
      </div>
    </div>
  );
};
