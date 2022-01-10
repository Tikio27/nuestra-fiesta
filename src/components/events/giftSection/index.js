import './index.scss';
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import Card from "react-credit-cards";
import { useMediaQuery } from 'react-responsive';

function GiftSection(config) {
  config = config.config ? config.config : { "description": "Mi mejor regalo es compartir contigo este gran día, Sin embargo si deseas obsequiarme algo, puedo sugerir las siguientes opciones.", "options": [{ "code": "123456", "store": "Amazon", "url": "http://amazon.com.mx" }, { "url": "http://liverpool.com.mx", "store": "Liverpool", "code": "654321" }], "title": "Mesa de Regalos" };

  return (
    <div id="gift-section" className="gift-section">
      <div className="gift-section-container">
        <ParallaxProvider
          init={{
            smoothScrollingDuration: 2000,
            smoothScrolling: true,
            forceHeight: false,
            mobileCheck: function () {
              console.log('Mobile check function')
            }
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
                <div id="slide-1" className="slide slide-1">
                  <Parallax 
                    data={{
                      'data--20p-top': "opacity: 0; transform: translate(0px, -100%)",
                      'data--60p-top': "opacity: 1; transform: translate(0px, 0px)",
                      'data--150p-top': "",
                      'data--200p-top': "opacity: 0; transform: translate(-100px, 0px);",
                      'data-anchor-target': '#slide-1'
                    }}>
                    <div className="gift-container">
                      <div className="slide-content text-center">
                        <h1 className="type-normal-48 primary-font">{config.title}</h1>
                        <p className="type-normal-36 secondary-font">{config.description}</p>
                        <img className="slide-img" src="/assets/img/gift/boxes@2x.png" />
                      </div>
                    </div>
                  </Parallax>
                </div>
                <div id="slide-2" className="slide slide-2">
                  <div className="gift-table-container">
                    <Parallax
                      data={{
                        'data--110p-top': "opacity: 0; transform:translate(0px, -100%) scale(5);",
                        'data--180p-top': "opacity: 1; transform:translate(0, 45%) scale(1);",
                        'data-anchor-target': "#slide-2"
                      }}>
                        <div className="giftcard-text text-center">
                        <p className="type-normal-36 secondary-font text-shadow_border text-white">
                          Encuentra mi mesa de regalos en las siguientes tiendas
                        </p>
                        </div>
                    </Parallax>
                    <section className="giftcard amazon">
                      <Parallax
                      data={{
                        'data--110p-top': "opacity: 0; transform:translate(0px, 0px) scale(3);",
                        'data--180p-top': "opacity: 1; transform:translate(0px, 0px) scale(1);",
                        'data-anchor-target': "#slide-2"
                      }}>
                        <a className="giftcard-cover" href="https://www.amazon.com.mx/" target="_blank">
                          <div className="gift-card card-amazon"  />
                        </a>
                      </Parallax>
                    </section>
                    <section className="giftcard liverpool">
                      <Parallax
                        data={{
                          'data--110p-top': "opacity: 0; transform:translate(0px, 0px) scale(3);",
                          'data--180p-top': "opacity: 1; transform:translate(0px, 0px) scale(1);",
                          'data-anchor-target': "#slide-2"
                        }}>
                        <a className="giftcard-cover " href="https://www.liverpool.com.mx/" target="_blank">
                          <div className="gift-card card-liverpool" />
                        </a>
                      </Parallax>
                    </section>
                    <section className="giftcard sears">
                      <Parallax
                      data={{
                        'data--110p-top': "opacity: 0; transform:translate(0px, 0px) scale(3);",
                        'data--180p-top': "opacity: 1; transform:translate(0px, 0px) scale(1);",
                        'data-anchor-target': "#slide-2"
                      }}>
                        <a className="giftcard-cover" href="https://www.sears.com.mx/" target="_blank">
                          <div className="gift-card card-sears" />
                        </a>
                      </Parallax>
                    </section>
                    <section className="giftcard palacio">
                      <Parallax
                        data={{
                          'data--110p-top': "opacity: 0; transform:translate(0px, 0px) scale(3);",
                          'data--180p-top': "opacity: 1; transform:translate(0px, 0px) scale(1);",
                          'data-anchor-target': "#slide-2"
                        }}>
                        <a className="giftcard-cover" href="https://www.elpalaciodehierro.com/" target="_blank">
                          <div className="gift-card card-palacio" />
                        </a>
                      </Parallax>
                    </section>
                  </div>
                </div>
                <div id="slide-3" className="slide slide-3">
                  <Parallax
                    data={{
                      'data--180p-top': "opacity: 0; transform:translate(0px, -200%);",
                      'data--250p-top': "opacity: 1; transform:translate(0px, 0px);",
                      'data--300p-top': "",
                      'data--350p-top': "opacity: 0; transform:translate(-100px, 0px);",
                      'data-anchor-target': "#slide-3"
                    }}>
                    <div className="envelope-container">
                      <div className="envelope-content text-center">
                        <p className="type-normal-24 secondary-font ">Si no tienes tiempo o no sabes qué regalarme</p>
                        <h1 className="type-normal-48 primary-font ">¡Lluvia de Sobres!</h1>
                        <p className="type-normal-18 secondary-font ">La lluvia de sobres, es la tradición de regalar dinero en efectivo a la quinceañera en un sobre el día del evento.</p>
                        <img src="/assets/img/gift/thank-you.png" />
                      </div>
                    </div>
                  </Parallax>
                </div>
                <div id="slide-4" className="slide slide-4">
                  <Parallax
                    data={{
                      'data--300p-top': "opacity: 0; transform:translate(0px, -200%);",
                      'data--350p-top': "opacity: 1; transform:translate(0px, 0px);",
                      'data--400p-top': "",
                      'data--450p-top': "opacity: 0; transform:translate(0px, 200px);",
                        'data-anchor-target': "#slide-4"
                      }}>
                    <div className="gift-debit-card">
                      <div className="debit-card-content text-center text-white">
                        <p className="type-normal-36 primary-font ">No es necesario estar cerca, para hacer sentir el amor y el cariño...</p>
                        <p className="type-normal-24 secondary-font py-5">Asi que si lo prefieres puedes hacer transferencia bancaria a la siguiente tarjeta</p>
                        <Card
                          name="Camila Rodríguez González"
                          number="**** **** **** 7048"
                          expiry="**/**"
                          cvc="737"
                          preview={true}
                          issuer="visa"
                        />
                      </div>
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
    </div>
  )
}

export default GiftSection;

