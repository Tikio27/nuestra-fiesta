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
// import InfoCard from '../info-card';
import Sparkles from '../utils/sparkle';
import RsvpCard from './rsvp-card';
import { Intro } from './intro';
import { useMediaQuery } from 'react-responsive'
import Quotes from './quotes';
import QuoteMobile from './quoteMobile';
import Parents from './parents';
import InfoCardEvent from '../info-card-event';
import GiftSection from './giftSection';

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

  console.log(window.innerWidth);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <div className="main">
      {eventData && (
        <>
          <section className="event__intro">
            <Intro title={eventData.eventTitle} subtitle={eventData.eventSubtitle} />
          </section>
          <section className="event__hero">
            <Parallax bgImage="/assets/img/hero.jpg" strength={300} className="event__background">
              <span className="gradient-overlay"></span>
                {/* <div className="event__title-header event__section-view"> */}
              <Sparkles style={{width: "100%", height: "200vh"}}>
                  {/* <div className="event__title-header-view"> */}
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
                  {/* </div> */}
              </Sparkles>
              {/* </div> */}
            </Parallax>
          </section>

          {/* <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div> */}

          <section className="event__celebrant">
            <Parallax strength={500} bgImage="/assets/img/bg/zodiac.jpg" className="event__celebrant-bg">
              <Plx parallaxData={ parallaxData.opacity }>
                <div className="mx-auto text-center ">
                  <StickyText
                    name={eventData.celebrantName}
                    text={eventData.quotes.stickyText}
                    textLabel={eventData.quotes.stickyTextLabel}
                  />
                </div>
              </Plx>
            </Parallax>
          </section>

          {/* <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div> */}
          {isDesktopOrLaptop && (
            <Quotes firstQuote={eventData.quotes.firstQuote} secondQuote={eventData.quotes.secondQuote} />
          )}
          {!isDesktopOrLaptop && (
            <Parallax blur={5} strength={500} bgImage="/assets/img/bg/horoscope2.webp">
            <>
              <QuoteMobile quote={eventData.quotes.firstQuote} imgUrl="/assets/img/foto3.jpg" />
              <QuoteMobile quote={eventData.quotes.secondQuote} imgUrl="/assets/img/foto4.jpg" />
            </>
            </Parallax>
          )}

          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>

          {/* <section className="event__parents">
            <Parallax strength={500} bgImage="/assets/img/bendicion3.jpg">
              <div className="event__parents-overlay">
                <img src="/assets/img/frames/shine.png"/>
              </div>
              <div className="event__parents-root">
                 
              </div>
            </Parallax>
          </section> */}
          <Parents parents={eventData.parents} godparents={eventData.godparents}/>

          {/* <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div> */}

          <section className="event__presentation">
            {/* <Parallax
                strength={500}
              bgImage="/assets/img/bg/zodiac2.gif" className="event__background"
            > */}
              <img src="/assets/img/bg/zodiac3.gif" className="event__presentation-bg"/>
              <Plx parallaxData={ parallaxData.presentation }>
                <div className="event__presentation-container">

                  <div className="event__presentation-content">
                  <div className="text-center p-4 event__presentation-text text-shadow_border">
                        <p className="secondary-font pb-4 type-bold-18 ">Estamos muy felices! y queremos compartirlo con todos ustedes, preparando una fiesta muy especial con gente linda, momentos emotivos, risas y muchas sorpresas más…</p>
                      <div className="divider "><div className="dividermask"></div><span><img src='/favicon.ico'/></span></div>
                        <p className="primary-font type-bold-48 pt-4 ">¡Mis XV Años!</p>
                        <p className="primary-font type-bold-24">Sabado, 12 de Febrero 2022</p>
                    </div>
                  </div>
                  <p className="primary-font type-bold-24 pt-4 text-center text-white">Faltan para vernos</p>
                  <CountdownCards date={eventData.date} time={eventData.time} ampm={eventData.ampm} />
                </div>
              </Plx>
            {/* </Parallax> */}
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
            <div className="container text-center py-4">
              <p className="primary-font type-bold-48">Acompañame</p>
              <p className="secondary-font type-normal-24">Los momentos más importantes de la vida se convierten en inolvidables cuando los compartes con quienes más amas.</p>
              <div className="row">
                <InfoCardEvent ceremony={eventData.locations['ceremony']} cocktail={eventData.locations['cocktail']}/>
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
          <section className="event__section-rsvp">
            <Parallax strength="500" bgImage="/assets/img/bg/horoscope.webp" className="event__background">
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
                <img src="/assets/img/dresscode.png" className="dress-code-img"/>
              </div>
            </div>
          </section>
          <div className="divider"><div className="dividermask"></div><span><img src='/favicon.ico' /></span></div>
          <section className="event-gift-section">
            <GiftSection config={eventData.properties.giftTable}/>
          </section>
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