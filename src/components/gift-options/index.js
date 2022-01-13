import './index.scss';
import 'animate.css';
import React, {useState, useEffect} from 'react';
import Card from "react-credit-cards";
import Plx from 'react-plx';
import parallaxData from '../../styles/parallax.json';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, ScrollTrigger, SplitWords, SplitChars } from 'react-gsap';

const animatedClass = 'animate__animated';

function GiftOptions(config) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(typeof window !== 'undefined');
  }, []);

  function addAnimation(elementClass, animationClass, self) {
    const el = document.querySelector(elementClass);
    console.log(self.progress);
    if (self.progress > 0.8) {
      el.classList.remove(animatedClass, 'animate__hinge');
      el.classList.add(animatedClass, animationClass);
    }
    if (self.progress < 0.4 && el.classList.contains(animatedClass)) {
      el.classList.remove(animatedClass, animationClass);
      el.classList.add(animatedClass, 'animate__hinge');
    }
  }

  config = config.config ? config.config : { "description": "Mi mejor regalo es compartir contigo este gran día, Sin embargo si deseas obsequiarme algo, puedo sugerir las siguientes opciones.", "options": [{ "code": "123456", "store": "Amazon", "url": "http://amazon.com.mx" }, { "url": "http://liverpool.com.mx", "store": "Liverpool", "code": "654321" }], "title": "Mesa de Regalos" };

  return (
    <Controller>
      <div className="gift-options">
        <div className="gift-options-container">
          <div className="slides-container">
            <Plx parallaxData={parallaxData.giftSection} className="slides" disabled={!isMounted}>
              <div className="slide slide-1">
                  <Scene duration="100%" triggerHook="onEnter" >
                    <Timeline wrapper={<div className="parallax" />}>
                      <Tween stagger={1} position="0" from={{ yPercent: -50, opacity: 0 }} to={{ yPercent: 0, opacity: 1 }}>
                        <img src="/assets/img/gift/silver-stars.jpg" alt="" className='slide-1__bg'/>
                      </Tween>
                      <div className="gift-container">
                        <Tween stagger={1} position="0"
                          from={{ yPercent: -100, scale: .6, opacity: 0 }}
                          to={{ yPercent: 0, scale: 1, opacity: 1 }}>
                          <div className="slide-content text-center">
                            <h1 className="slide-1__title type-normal-36 primary-font">{config.title}</h1>
                            <p className="slide-1__description type-normal-24 secondary-font">{config.description}</p>
                            <img className="slide-img" src="/assets/img/gift/boxes@2x.png" />
                          </div>
                        </Tween>
                      </div>
                    </Timeline>
                  </Scene>
              </div>
              <div className="slide slide-2" id="slide-2">
                <div className="gift-table-container">
                  <ScrollTrigger trigger="#slide-2"
                    onUpdate={(self) => addAnimation('.giftcard-text', 'animate__zoomInDown', self)}
                    start="top -70%" end="top -150%" scrub={1} >
                    <Tween stagger={1} duration={1.5} wrapper={<div className="w-100" />}>
                      <div className="giftcard-text text-center type-normal-24">
                        <p className="secondary-font text-shadow_border text-white">
                            Encuentra mi mesa de regalos en las siguientes tiendas
                          </p>
                      </div>
                    </Tween>
                  </ScrollTrigger>
                  <div className='row w-100'>
                    <ScrollTrigger trigger="#slide-2"
                      onUpdate={(self) => addAnimation('.giftcard.amazon', 'animate__bounceInRight', self)}
                      start="top -70%" end="top -150%" scrub={1}>
                      <Tween stagger={1} duration={1.5}>
                        <section className="giftcard-content amazon col-12 col-md-6">
                          <div className='giftcard amazon animate__delay-1s'>
                            <a className="giftcard-cover" href="https://www.amazon.com.mx/wedding/camila-rodriguez-camila-rodriguez-guadalajara-february-2022/registry/3CEXKIJHCCRC9" target="_blank">
                              <div className="gift-card card-amazon" />
                            </a>
                          </div>
                        </section>
                      </Tween>
                    </ScrollTrigger>
                    <ScrollTrigger trigger="#slide-2"
                      onUpdate={(self) => addAnimation('.giftcard.liverpool', 'animate__bounceInUp', self)}
                      start="top -70%" end="top -150%" scrub={1}>
                      <Tween stagger={1} duration={1.5}>
                        <section className="giftcard-content liverpool col-12 col-md-6">
                          <div className="giftcard liverpool animate__delay-2s">
                            <a className="giftcard-cover " href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50790269" target="_blank">
                              <div className="gift-card card-liverpool" />
                              <span className="giftcard-cover--text text-center">Evento: 50790269</span>
                            </a>
                          </div>
                        </section>
                      </Tween>
                    </ScrollTrigger>
                    {/* <ScrollTrigger trigger="#slide-2"
                      onUpdate={(self) => addAnimation('.giftcard.sears', 'animate__bounceInDown', self)}
                      start="top -70%" end="top -150%" scrub={1}>
                      <Tween stagger={1} duration={1.5}>
                        <section className="giftcard-content sears col-12 col-md-6">
                          <div className="giftcard sears animate__delay-2s">
                            <a className="giftcard-cover" href="https://www.sears.com.mx/" target="_blank">
                              <div className="gift-card card-sears" />
                            </a>
                          </div>
                        </section>
                      </Tween>
                    </ScrollTrigger>
                    <ScrollTrigger trigger="#slide-2"
                      onUpdate={(self) => addAnimation('.giftcard.palacio', 'animate__bounceInLeft', self)}
                      start="top -70%" end="top -150%" scrub={1}>
                      <Tween stagger={1} duration={1.5}>
                        <section className="giftcard-content palacio col-12 col-md-6">
                          <div className="giftcard palacio animate__delay-1s">
                            <a className="giftcard-cover" href="https://www.elpalaciodehierro.com/" target="_blank">
                              <div className="gift-card card-palacio" />
                            </a>
                          </div>
                        </section>
                      </Tween>
                    </ScrollTrigger> */}
                  </div>
                </div>
              </div>
              <div id="slide-3" className="slide slide-3">
                <div className="envelope-container">
                  <ScrollTrigger trigger="#slide-3"
                    start="top -170%" end="top -220%" scrub={1}>
                    <Tween from={{ y: '-800%' }} stagger={1} duration={3.5} wrapper={<div className="slide3-title" />}>
                      <SplitChars
                        wrapper={<p className="type-normal-36 primary-font envelope-char" style={{ display: 'inline-block', paddingLeft: "10px", paddingRight: "10px" }} />}
                      >
                        ¡Lluvia de Sobres!
                      </SplitChars>
                    </Tween>
                  </ScrollTrigger>
                  <ScrollTrigger trigger="#slide-3"
                    start="top -220%" end="top -250%" scrub={0.5}>
                    <Tween
                      from={{
                        y: '-20%',
                        opacity: '0'
                      }}
                      to={{
                        y: '0',
                        opacity: '1'
                      }}
                      ease="circ.inOut(0, 2)"
                    >
                    <div className="envelope-content text-center">
                        <p className="type-normal-24 secondary-font ">Si no tienes tiempo o no sabes qué regalarme</p>
                        <p className="type-normal-18 secondary-font ">La lluvia de sobres, es la tradición de regalar dinero en efectivo a la quinceañera en un sobre el día del evento.</p>
                        <img src="/assets/img/gift/thank-you.png" />
                    </div>
                    </Tween>
                  </ScrollTrigger>
                </div>
              </div>
              <div id="slide-4" className="slide slide-4">
                <div className="debit-card-content text-center text-white">
                  <ScrollTrigger trigger="#slide-4"
                    start="top -400%" end="top -460%" scrub={0.5}>
                    <Tween
                      from={{ y: '-100vh', rotation: 360 }}
                      stagger={0.2}
                      ease="elastic.out(0.1, 0.1)"
                    >
                      <SplitWords
                        wrapper={<p className="debit-card-content__title type-normal-24 primary-font text-shadow_border" />}
                      >
                        No es necesario estar cerca, para hacer sentir el amor y el cariño...
                      </SplitWords>
                      <br></br>
                      <SplitWords
                        wrapper={<p className="debit-card-content__subtitle type-normal-18 secondary-font text-shadow_border" />}
                      >
                        Asi que si lo prefieres puedes hacer transferencia bancaria a la siguiente tarjeta
                        </SplitWords>
                    </Tween>
                  </ScrollTrigger>
                  <ScrollTrigger trigger="#slide-4"
                    start="top -460%" end="top -500%" scrub={1}>
                    <Tween
                      from={{ scale: '0', rotation: 360 }}
                      stagger={0.2}
                      ease="elastic.out(0.1, 0.1)"
                    >
                      <div className="debit-card__card">
                        <Card
                          name="Camila Rodríguez González"
                          number="**** **** **** 7048"
                          expiry="**/**"
                          cvc="737"
                          preview={true}
                          issuer="visa"
                          />
                      </div>
                    </Tween>
                  </ScrollTrigger>
                </div>
              </div>
            </Plx>
          </div>
        </div>
      </div>
    </Controller>
  )
}

export default GiftOptions
