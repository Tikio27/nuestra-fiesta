import React from 'react';
import Plx from "react-plx";

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.lval = props.lval;
    this.color = props.color;
    this.tabMax = props.tabMax;
    this.blockMax = props.blockMax;
    this.text = props.text;
    this.blockMin = props.blockMin;
    this.tabMin = props.tabMin;
    this.link = props.link;
  }

  render() {
    const tabData = [
      {
        start: 0,
        end: 200 + "vh",
        properties: [
          {
            startValue: 7.5,
            endValue: -85,
            property: "translateY",
            unit: "vh",
          }
        ],
      }
    ];
    const blockData = [
      {
        start: 0,
        end: 200 + "vh",
        properties: [
          {
            startValue: 89,
            endValue: 0,
            property: "translateY",
            unit: "vh",
          }
        ]
      }
    ];

    tabData[0]["properties"][0]["endValue"] = this.tabMax;
    blockData[0]["properties"][0]["endValue"] = this.blockMax;
    tabData[0]["properties"][0]["startValue"] = this.tabMin;
    blockData[0]["properties"][0]["startValue"] = this.blockMin;

    return (
      <div className="Circle">
        <header className="Circle-header">
          <div style={{ height: 100 + "vh" }}>
            <Plx parallaxData={tabData} className="tab" style={{ left: this.lval + 'vw', backgroundColor: this.color }} ></Plx>
            <Plx parallaxData={blockData} style={{ backgroundColor: this.color }} className="block"><p className="labelT"><a href={this.link}>{this.text}</a></p></Plx>
          </div>
        </header>
      </div>
    );
  }

}