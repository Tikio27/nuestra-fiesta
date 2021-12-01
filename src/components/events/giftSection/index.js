import './index.scss';
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr';

function GiftSection(config) {
  config = config.config;
  console.log(config);
  return (
    <div id="gift-section" className="gift-section">
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 2000,
          smoothScrolling: true,
          forceHeight: false
        }}
      >
        <div id="slides-container">
          <div id="slides">
            <Parallax
              data={{
                'data-anchor-target': '#helper',
                'data--0-top': 'transform: translate(0%, 0%);',
                'data--100p-top': "",
                'data--150p-top': 'transform: translate(-50%, 0%);',
                'data--250p-top': "",
                'data--300p-top': 'transform: translate(-50%, -50%);',
                'data--400p-top': "",
                'data--450p-top': 'transform: translate(0%, -50%);',
                'data--550p-top': ""
              }}
            >
              <div id="slide-1" className="slide">
                <Parallax 
                  data={{
                    'data--30p-top': "opacity: 0; transform: translate(0px, -200%)",
                    'data--80p-top': "opacity: 1; transform: translate(0px, 0px)",
                    'data--150p-top': "",
                    'data--180p-top': "opacity: 0; transform: translate(-100px, 0px);",
                    'data-anchor-target': '#slide-1'
                  }}>
                  <div className="caption">
                    <h1>{config.title}</h1>
                    <p>{config.description}</p>
                  </div>
                </Parallax>
              </div>
              <div id="slide-2" className="slide">
                <Parallax
                  data={{
                    'data--130p-top': "opacity: 0; transform:translate(0px, -200%);",
                    'data--180p-top': "opacity: 1; transform:translate(0px, 0px);",
                    'data--250p-top': "",
                    'data--280p-top': "opacity: 0; transform:translate(-100px, 0px);",
                    'data-anchor-target': "#slide-2"
                  }}>
                    <div className="caption">
                      <h1>Image 2 Title</h1>
                      <p>Image description goes here.</p>
                    </div>
                </Parallax>
              </div>
              <div id="slide-3" className="slide">
                <Parallax
                  data={{
                    'data--150p-top': "opacity: 0; transform:translate(0px, -200%);",
                    'data--200p-top': "opacity: 1; transform:translate(0px, 0px);",
                    'data--250p-top': "",
                    'data--300p-top': "opacity: 0; transform:translate(-100px, 0px);",
                    'data-anchor-target': "#slide-3"
                  }}>
                  <div className="caption">
                    <h1>Image 3 Title</h1>
                    <p>Image description goes here.</p>
                  </div>
                </Parallax>
              </div>
              <div id="slide-4" className="slide">
                <Parallax
                  data={{
                    'data--300p-top': "opacity: 0; transform:translate(0px, -200%);",
                    'data--350p-top': "opacity: 1; transform:translate(0px, 0px);",
                    'data--450p-top': "",
                    'data--500p-top': "opacity: 0; transform:translate(0px, 200px);",
                      'data-anchor-target': "#slide-4"
                    }}>
                  <div className="caption">
                    <h1>Image 4 Title</h1>
                    <p>Image description goes here.</p>
                  </div>
                </Parallax>
              </div>
            </Parallax>
          </div>
          <div id="helper">
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}

export default GiftSection;

