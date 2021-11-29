import './index.scss';
import React from "react";
import Plx from "react-plx";

const headingParalaxData = [
  {
    start: "600vh",
    end: "400vh",
    properties: [
      {
        startValue: "block",
        endValue: "none",
        property: "display"
      }
    ]
  }
];

export default function Events({parents, godparents}) {
  return (
    <div style={{ position: "relative" }} className="parents-container">
      <Plx
        style={{
          width: "80%",
          position: "absolute",
          top: "25%",
          marginLeft: "10%",
          textAlign: "center"
        }}
        parallaxData={headingParalaxData}
      >
        <div className="event__parents-content text-center blur-text">
          <p className="parents-title secondary-font text-shadow_border text-white type-bold-24">Con la bendicion de Dios y de mis Padres</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.father}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{parents.mother}</p>
        </div>
      </Plx>
      <Plx
        style={{
          width: "80%",
          position: "absolute",
          top: "50%",
          marginLeft: "10%",
          textAlign: "center"
        }}
        parallaxData={headingParalaxData}
      >
        <div className="event__parents-content text-center blur-text-godparents">
          <p className="parents-title secondary-font text-shadow_border type-bold-24">Y la compañia de mis padrinos</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godFather}</p>
          <p className="parents-name primary-font text-shadow_border text-white type-bold-36">{godparents.godMother}</p>
        </div>
      </Plx>
      <div className="blur-plx">
        <div className="background-image" />
      </div>
    </div>
  );
};
