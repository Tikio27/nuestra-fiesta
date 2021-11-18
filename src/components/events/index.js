import './index.scss';
import React, { useState, useEffect } from 'react';
import { db } from '../db/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import StickyText from '../utils/sticky-text';
import { useParams } from "react-router-dom";
import { Parallax, Background } from 'react-parallax';
import Plx from 'react-plx';
import { Parallax as ScrollParallax } from "react-scroll-parallax";
import parallaxData from '../../styles/parallax.json';
import CountdownCards from '../countdown-cards';
import InfoCard from '../info-card';
import Sparkles from '../utils/sparkle';
import RsvpCard from './rsvp-card';
import { Intro } from './intro';

function Events() {
  const { id, guest } = useParams();
  const [eventData, setEventData] = useState();
  const [eventId, setEventId] = useState();
  const [paramId, setParamId ] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      setParamId(id);
    }
  }, [id]);

  useEffect(() => {
    if (paramId) {
      const collectionRef = collection(db, 'events');
      const q = query(collectionRef, where('name', '==', paramId))
      getDocs(q).then(docs => {
        if (docs.lenght > 1) {
          setError(true);
        } else {
          docs.forEach((doc) => {
            setEventId(doc.id);
            setEventData(doc.data());
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        }
      });
    }
  }, [paramId]);

  if (eventData) {
    console.log(`Event Data: ${JSON.stringify(eventData)}`);
  }

  return (
    <div className="main">
      {eventData && (
        <>
          <Intro title={eventData.eventTitle} subtitle={eventData.eventSubtitle}/>
          <section className="event__hero  event__section-layout">
            <Parallax bgImage="/assets/img/hero.jpg" strength={500} className="event__background">
              <span className="gradient-overlay"></span>
                <div className="event__title-header event__section-view">
                <Sparkles>
                  <div className="event__title-header-view">
                    {/* <Plx
                      parallaxData={ parallaxData.heroText }
                    >
                      <div className="mx-auto text-center text-shine">
                        <span className="event__hero-title primary-font text-shadow_border type-bold-72">{eventData.eventTitle}</span>
                          <span className="event__hero-subtitle secondary-font text-shadow_border type-normal-36">
                        {eventData.eventSubtitle}
                        </span>
                      </div>
                    </Plx> */}
                  </div>
                </Sparkles>
              </div>
            </Parallax>
          </section>

          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>

          <section className="event__celebrant">
            <Parallax strength={500} bgImage="/assets/img/bg/bg-sky@3x.png" className="event__background">
              <Plx parallaxData={ parallaxData.opacity }>
                <div className="mx-auto text-center">
                  <StickyText
                    name={eventData.celebrantName}
                    text={eventData.quotes.stickyText}
                    textLabel={eventData.quotes.stickyTextLabel}
                  />
                </div>
              </Plx>
            </Parallax>
          </section>

          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>

          <section className="event__quotes event__section-layout">
            <Parallax blur={5} strength={-500} bgImage="/assets/img/sky4.png">
              <div className="container">
                <ScrollParallax x={[-50, 50]}>
                  <div className="imgBx jarallax">
                    <img className="jarallax-img" src='/assets/img/foto3.jpg' />
                  </div>
                </ScrollParallax>
                <div className="event__quotes-text">
                  <ScrollParallax y={[0, -150]}>
                    <div className="content" data-jarallax-element="-200 0">
                      <p className="secondary-font type-normal-18">{eventData.quotes.firstQuote}</p>
                    </div>
                  </ScrollParallax>
                </div>
              </div>
              <div className="container">
                <div className="event__quotes-text">
                  <ScrollParallax y={[0, -250]}>
                    <div className="content" data-jarallax-element="-200 0">
                        <p className="secondary-font type-normal-18">{eventData.quotes.secondQuote}</p>
                    </div>
                  </ScrollParallax>
                </div>
                <ScrollParallax x={[100, -50]}>
                  <div className="imgBx jarallax">
                    <img className="jarallax-img" src='/assets/img/foto4.jpg' />
                  </div>
                </ScrollParallax>
              </div>
            </Parallax>
          </section>

          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>

          <section className="event__parents">
            <Parallax strength={500} bgImage="/assets/img/bendicion5.jpg">
              <div className="event__parents-root">
                  <div className="event__parents-container">
                      <ScrollParallax
                          offsetYMax={-20}
                          offsetYMin={20}
                          offsetXMax={'-500px'}
                          offsetXMin={'500px'}
                          y={[-50, 50]}
                          // x={[-20, 20]}
                          // slowerScrollRate
                          className="event__parents-parallax"
                      >
                            <div className="event__parents-content text-center">
                              <p className="secondary-font text-shadow_border text-white type-bold-36">Con la bendicion de Dios y de mis Padres</p>
                        <p className="primary-font text-shadow_border text-white type-bold-48">{eventData.parents.father}</p>
                        <p className="primary-font text-shadow_border text-white type-bold-48">{eventData.parents.mother}</p>
                            </div>
                      </ScrollParallax>
                      <ScrollParallax
                          offsetYMax={-30}
                          offsetYMin={0}
                          offsetXMax={40}
                          offsetXMin={-20}
                          y={[-50, -100]}
                          //  x={[20, -20]}
                          slowerScrollRate
                          className="event__godparents"
                      >
                          <div className="event__parents-content text-center text-white">
                        <p className="secondary-font text-shadow_border type-bold-36">Y la compañia de mis padrinos</p>
                        <p className="primary-font text-shadow_border type-bold-48">Jesus Esparza</p>
                        <p className="primary-font text-shadow_border type-bold-48">Emma Sandoval</p>
                          </div>
                      </ScrollParallax>
                  </div>
              </div>
            </Parallax>
          </section>

          {/* <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div> */}

          <section className="event__presentation">
            <Parallax
                strength={500}
                bgImage="/assets/img/bg/bg-sky.png"
            >
              <Plx parallaxData={ parallaxData.opacity }>
                <div className="event__presentation-container">

                  <div className="event__presentation-content">
                    <div className="text-center p-5 event__presentation-text">
                        <p className="secondary-font pb-4 type-bold-18 text-shine">Estamos muy felices! y queremos compartirlo con todos ustedes, preparando una fiesta muy especial con gente linda, momentos emotivos, risas y muchas sorpresas más…</p>
                      <div className="divider "><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>
                        <p className="primary-font type-bold-48 pt-4 text-shine">¡Mis XV Años!</p>
                        <p className="primary-font type-bold-24 text-shine">Sabado, 12 de Febrero 2022</p>
                    </div>
                  </div>
                  <p className="primary-font type-bold-24 pt-4 text-center text-white">Faltan para vernos</p>
                  <CountdownCards date={eventData.date} time={eventData.time} ampm={eventData.ampm} />
                </div>
              </Plx>
            </Parallax>
          </section>

          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>

          <section className="event__bg-section">
            <div className="event__bg">
              <div className="event__gb--overlay">
                <div className="event__gb--overlay-color">
                  {/* <div className="" /> */}
                </div>
              </div>
            </div>
          </section>

          {/* <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div> */}

          <section className="event__locations event__section-layout">
            <div className="container text-center">
              <p className="primary-font type-bold-48 pt-4">Acompañame</p>
              <p className="secondary-font type-normal-24 pt-4">Los momentos más importantes de la vida se convierten en inolvidables cuando los compartes con quienes más amas.</p>
              <div className="row">
                <InfoCard ceremony={eventData.locations['ceremony']} cocktail={eventData.locations['cocktail']}/>
              </div>
            </div>
          </section>

          <section className="event__bg-section">
            <div className="event__bg">
              <div className="event__gb--overlay">
                <div className="event__gb--overlay-color">
                  {/* <div className="" /> */}
                </div>
              </div>
            </div>
          </section>
          <div className="divider">
            <div className="dividermask"></div>
            <span><img src='/favicon.ico' /></span>
          </div>
          <section className="event__section-layout">
            <Parallax strength="200" bgImage="/assets/img/rsvp/rsvp@2x.png" className="event__background">
              <Plx parallaxData={parallaxData.rsvp}>
                <RsvpCard guestId={guest} eventId={eventId} eventData={eventData} />
              </Plx>
            </Parallax>
          </section>
          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico' /></span></div>
          <section className="event__section-dress-code">
            <div className="container p-5">
              <div className="p-4 text-center">
                <p className="type-normal-36 primary-font">Codigo de Vestimenta</p>
                <p className="type-normal-36 primary-font">Formal</p>
                <img src="/assets/img/dresscode.png"/>
              </div>
            </div>
          </section>
          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>
          <Parallax strength={300}>
            <Background className="custom-bg">
                <img src="/assets/img/foto6.jpg" alt="fill murray" strength={500}/>
            </Background>
            <div className="event_min-height"></div>
          </Parallax>
            <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico' /></span></div>
            <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico' /></span></div>
        </>
      )}

    </div>
  );
}

export default Events;