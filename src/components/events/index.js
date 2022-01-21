import './index.scss';
import React, { useState, useEffect, Suspense } from 'react';
// import { db } from '../db/firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { useParams } from "react-router-dom";
import { Parallax } from 'react-parallax';
import Plx from 'react-plx';
import { useMediaQuery } from 'react-responsive';
import { Hearts } from 'react-loader-spinner';
import { useDeviceSelectors, useMobileOrientation } from 'react-device-detect';

// Modules
import parallaxData from '../../styles/parallax.json';
import { Intro } from './intro';
const StickyText = React.lazy(() => import('../utils/sticky-text'));
const RsvpCard = React.lazy(() => import('./rsvp-card'));
const GiftOptions = React.lazy(() => import('../gift-options'));
const CountdownCards = React.lazy(() => import('../countdown-cards'));
const Sparkles = React.lazy(() => import('../utils/sparkle'));
const Quotes = React.lazy(() => import('./quotes'));
const QuoteMobile = React.lazy(() => import('./quoteMobile'));
const Parents = React.lazy(() => import('./parents'));
const InfoCardEvent = React.lazy(() => import('../info-card-event'));
const Separator = React.lazy(() => import('./separator'));

// Images
import heroImg from '../../../public/assets/img/celebrant/hero.jpg';
import skyBg from '../../../public/assets/img/sky5.png';
import quoteMobileBg from '../../../public/assets/img/bg/celestial-backgrounds-12.jpg';
import quote1 from '../../../public/assets/img/celebrant/quote1.jpg';
import quote2 from '../../../public/assets/img/celebrant/quote2.jpg';
import presentationBg from '../../../public/assets/img/bg/zodiac3.gif';
import rsvpBg from '../../../public/assets/img/bg/horoscope.webp';
import celebrantFooterBg from '../../../public/assets/img/celebrant/footer_bg.jpg';
import celebrantFooterBgLarge from '../../../public/assets/img/celebrant/footer_bg-large.jpg';
import imgDressCode from '../../../public/assets/img/dresscode.png';
import celebrationBg from '../../../public/assets/img/celebration.jpeg';

function Events() {
  const { id, guest } = useParams();
  const [eventData, setEventData] = useState();
  const [eventId, setEventId] = useState();
  const [paramId, setParamId] = useState();
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isLandscape } = useMobileOrientation();
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent)
  const { isMobile, isIOS } = selectors;

  useEffect(() => {
    if (id) {
      setParamId(id);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLandscape]);

  useEffect(() => {
    setEventData(JSON.parse(`{"eventType":"XV Años","name":"camila-misxvs","eventTitle":"Mis XV's","properties":{"dressCode":"Formal","giftTable":{"description":"Mi mejor regalo es compartir contigo este gran día, Sin embargo si deseas obsequiarme algo, puedo sugerir las siguientes opciones.","title":"Mesa de Regalos","options":[{"store":"Amazon","url":"http://amazon.com.mx","code":"123456"},{"store":"Liverpool","code":"654321","url":"http://liverpool.com.mx"}]},"staySafe":"Debes portar el cubrebocas todo el tiempo posible. Sabemos que estás feliz por mi, pero evita abrazarme. ¡Cuidemos a la quinceañera! Permite que el personal revise tu temperatura a la entrada. Lava tus manos antes y después de comer o cada vez que te levantes de tu mesa. Si sientes algún síntoma previo al evento háznoslo saber, nosotros comprenderemos tu ausencia.","hashtag":"#misXVCami"},"quotes":{"stickyText":"La vida es maravillosa a cualquier edad, pero los quince... ","stickyTextLabel":"Son imposibles de olvidar","section1":"La vida es maravillosa a cualquier edad, pero los quince... ","firstQuote":"Quince años es pasar de la niñez a la adolescencia, entrar a un mundo desconocido y nuevo, continuar sintiéndose querida y acompañada, celebrar lo vivido hasta aquí, comenzar una nueva etapa.","secondQuote":"La luna se encuentra en tu sonrisa y el sol en tu mirada.","section2":"Los momentos más importantes de la vida se convierten en inolvidables cuando los compartes con quienes más amas."},"godParents":[{"godMother":"Madrina","godFather":"Padrino","role":"XV Años"},{"role":"XV Años","godMother":"Madrina","godFather":"Padrino"}],"ampm":"pm","date":"02-12-2022","time":"06:00","owner":{"phone":3338454848,"email":"jerp27@gmail.com","addess":"Fresno 30","name":"J Eutiquio"},"godparents":{"godMother":"Emma Evelia Sandoval García","godFather":"Jesús Esparza Romero"},"urlPath":"cami-20120212","celebrantName":"Camila Guadalupe Rodríguez González","type":"basic, premium, golden","eventSubtitle":"Bienvenidos al inicio de mi cuento de hadas.","parents":{"father":"J. Eutiquio Rodríguez Parra","mother":"Sandra Celina González Monroy"},"guests":[{"email":"jerp27@gmail.com","phone":3338454848,"id":"famrodgon","name":"Eutiquio","userGuest":{},"admissions":3,"hasConfirmed":false}],"locations":{"ceremony":{"address":"C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.","location":"Emporio Salon de Eventos","link":"https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821","title":"Ceremonia Religiosa","time":"05:30 PM"},"cocktail":{"location":"Emporio Salon de Eventos","title":"Recepción","time":"06:30 PM","address":"C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.","link":"https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821"}}}`));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  // useEffect(() => {
  //   if (paramId) {
  //     const collectionRef = collection(db, 'events');
  //     const q = query(collectionRef, where('name', '==', paramId))
  //     getDocs(q).then(docs => {
  //       if (docs.lenght > 1) {
  //         setError(true);
  //       } else {
  //         docs.forEach((doc) => {
  //           setEventId(doc.id);
  //           setEventData(doc.data());
  //           // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //         });
  //       }
  //     });
  //   }
  // }, [paramId]);

//   if (eventData) {
//     console.log(`Event Data: ${JSON.stringify(eventData)}`);
//   }
//   } else {
//     setEventData(JSON.parse(`{"eventType":"XV Años","name":"camila-misxvs","eventTitle":"Mis XV's","properties":{"dressCode":"Formal","giftTable":{"description":"Mi mejor regalo es compartir contigo este gran día, Sin embargo si deseas obsequiarme algo, puedo sugerir las siguientes opciones.","title":"Mesa de Regalos","options":[{"store":"Amazon","url":"http://amazon.com.mx","code":"123456"},{"store":"Liverpool","code":"654321","url":"http://liverpool.com.mx"}]},"staySafe":"Debes portar el cubrebocas todo el tiempo posible. Sabemos que estás feliz por mi, pero evita abrazarme. ¡Cuidemos a la quinceañera! Permite que el personal revise tu temperatura a la entrada. Lava tus manos antes y después de comer o cada vez que te levantes de tu mesa. Si sientes algún síntoma previo al evento háznoslo saber, nosotros comprenderemos tu ausencia.","hashtag":"#misXVCami"},"quotes":{"stickyText":"La vida es maravillosa a cualquier edad, pero los quince... ","stickyTextLabel":"Son imposibles de olvidar","section1":"La vida es maravillosa a cualquier edad, pero los quince... ","firstQuote":"Quince años es pasar de la niñez a la adolescencia, entrar a un mundo desconocido y nuevo, continuar sintiéndose querida y acompañada, celebrar lo vivido hasta aquí, comenzar una nueva etapa.","secondQuote":"La luna se encuentra en tu sonrisa y el sol en tu mirada.","section2":"Los momentos más importantes de la vida se convierten en inolvidables cuando los compartes con quienes más amas."},"godParents":[{"godMother":"Madrina","godFather":"Padrino","role":"XV Años"},{"role":"XV Años","godMother":"Madrina","godFather":"Padrino"}],"ampm":"pm","date":"02-12-2022","time":"06:00","owner":{"phone":3338454848,"email":"jerp27@gmail.com","addess":"Fresno 30","name":"J Eutiquio"},"godparents":{"godMother":"Emma Sandoval","godFather":"Jesus Esparza"},"urlPath":"cami-20120212","celebrantName":"Camila Guadalupe Rodríguez González","type":"basic, premium, golden","eventSubtitle":"Bienvenidos al inicio de mi cuento de hadas.","parents":{"father":"J. Eutiquio Rodriguez Parra","mother":"Sandra Celina González Monroy"},"guests":[{"email":"jerp27@gmail.com","phone":3338454848,"id":"famrodgon","name":"Eutiquio","userGuest":{},"admissions":3,"hasConfirmed":false}],"locations":{"ceremony":{"address":"C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.","location":"Emporio Salon de Eventos","link":"https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821","title":"Ceremonia Religiosa","time":"06:00 PM"},"cocktail":{"location":"Emporio Salon de Eventos","title":"Recepción","time":"07:00 PM","address":"C. Puerto Yavaros, Miramar, 45060 Zapopan, Jal.","link":"https://www.google.com/maps/place/Emporio+Sal%C3%B3n+De+Eventos/@20.6366954,-103.4412077,15z/data=!4m5!3m4!1s0x0:0x815816c0861e99f!8m2!3d20.6366918!4d-103.4411821"}}}`));
// }
  

  // console.log(window.innerWidth);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <div className={`main events
      ${isMobile ? 'is-mobile' : ''}
      ${isIOS ? 'is-ios' : ''}
      ${isLandscape ? 'is-landscape' : ''}`
    }>
      {loading && (
        <div className="event__loader">
          <div className='stars'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
          <div className='event__loader-content'>
            <div className="event__loader-container">
              <Suspense fallback={<div>Loading...</div>}>
                <Separator />
              </Suspense>
              <div className="pt-4"></div>
            <Hearts arialLabel="loading-indicator" color="#0833A2" width="250" />
              <p className="primary-font type-bold-48 text-3d">Loading...</p>
              <div className="pt-4"></div>
              <Suspense fallback={<div>Loading...</div>}>
                <Separator />
              </Suspense>
            </div>
          </div>
        </div>
      )}
      {eventData && !loading && (
        <>
          <section className="event__intro">
            <Intro title={eventData.eventTitle} subtitle={eventData.eventSubtitle} />
          </section>
          <div className='pt-1' />
          <section className="event__hero">
            <Parallax bgImage={heroImg} strength={500} className="event__background">
              <span className="gradient-overlay"></span>
              <Suspense fallback={<div>Loading...</div>}>
                <Sparkles style={{width: "100%", height: "200vh"}}>
                </Sparkles>
              </Suspense>
            </Parallax>
          </section>
          <div className='pt-1' />
          <section className="event__celebrant">
            <Parallax strength={800} bgImage={skyBg} className="event__celebrant-bg">
              <Plx parallaxData={ parallaxData.opacity }>
                <div className="mx-auto text-center ">
                  <Suspense fallback={<div>Loading...</div>}>
                    <StickyText
                      name={eventData.celebrantName}
                      text={eventData.quotes.stickyText}
                      textLabel={eventData.quotes.stickyTextLabel}
                    />
                  </Suspense>
                </div>
              </Plx>
            </Parallax>
          </section>
          <div className='pt-1' />
          {isDesktopOrLaptop && (
            <Suspense fallback={<div>Loading...</div>}>
              <Quotes firstQuote={eventData.quotes.firstQuote} secondQuote={eventData.quotes.secondQuote} imgFirstQuote={quote1} imgSecondQuote={quote2} />
            </Suspense>
          )}
          {!isDesktopOrLaptop && (
            <Parallax blur={5} strength={500} bgImage={quoteMobileBg}>
              <Suspense fallback={<div>Loading...</div>}>
                <QuoteMobile quote={eventData.quotes.firstQuote} imgUrl={quote1} />
                <QuoteMobile quote={eventData.quotes.secondQuote} imgUrl={quote2} />
              </Suspense>
            </Parallax>
          )}

          <div className='pt-1' />
          <Suspense fallback={<div>Loading...</div>}>
            <Parents parents={eventData.parents} godparents={eventData.godparents} />
          </Suspense>

          <div className='pt-1' />
          <section className="event__presentation">
            <img src={presentationBg} className="event__presentation-bg" loading="lazy"/>
            <Plx parallaxData={ parallaxData.presentation }>
              <div className="event__presentation-container">
                <div className="event__presentation-content">
                <div className="text-center p-4 event__presentation-text text-shadow_border">
                    <p className="type-bold-16 secondary-font pb-4">Estamos muy felices! y queremos compartirlo con todos ustedes, preparando una fiesta muy especial</p>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Separator />
                    </Suspense>
                    <div>
                      <p className="primary-font type-bold-36 pt-4 ">¡Mis XV Años!</p>
                      <p className="primary-font type-bold-24">Sabado, 12 de Febrero 2022</p>
                    </div>
                  </div>
                </div>
                <p className="primary-font type-bold-24 pt-4 text-center text-white">Faltan para vernos</p>
                <Suspense fallback={<div>Loading...</div>}>
                  <CountdownCards date={eventData.date} time={eventData.time} ampm={eventData.ampm} />
                </Suspense>
              </div>
            </Plx>
          </section>

          <section className="event__bg-section">
            <div className="event__bg event__bg--1">
              <div className="event__gb--overlay">
                <div className="event__gb--overlay-color" />
              </div>
            </div>
          </section>

          <section className="event__locations event__section-layout">
            <div className="text-center py-4">
              <div className="container">
                <p className="primary-font type-bold-48">Acompañame</p>
                <p className="secondary-font type-normal-24">Los momentos más importantes de la vida se convierten en inolvidables cuando los compartes con quienes más amas.</p>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <InfoCardEvent ceremony={eventData.locations['ceremony']} cocktail={eventData.locations['cocktail']} />
              </Suspense>
            </div>
          </section>

          <section className="event__bg-section">
            <div className="event__bg event__bg--2">
              <div className="event__gb--overlay">
                <div className="event__gb--overlay-color" />
              </div>
            </div>
          </section>

          <section className="event-gift-section">
            <Suspense fallback={<div>Loading...</div>}>
              <GiftOptions config={eventData.properties.giftTable} />
            </Suspense>
          </section>
          <section className="event__section-rsvp">
            <Parallax strength="500" bgImage={rsvpBg} className="event__background">
              <Plx parallaxData={parallaxData.rsvp}>
                <Suspense fallback={<div>Loading...</div>}>
                  <RsvpCard eventId={eventId} eventData={eventData} />
                </Suspense>
              </Plx>
            </Parallax>
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <Separator />
          </Suspense>
          <section className="event__section-dress-code">
            <div className="container p-5">
              <div className="p-4 text-center">
                <p className="type-normal-36 primary-font">Codigo de Vestimenta</p>
                <p className="type-normal-36 primary-font">Formal</p>
                <img src={imgDressCode} className="dress-code-img" loading="lazy"/>
              </div>
            </div>
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <Separator />
          </Suspense>
          <Parallax strength={-200} className="event__footer-bg"
            bgImage={isLandscape ? celebrantFooterBgLarge : celebrantFooterBg}
          >
            <div className="event_min-height"></div>
          </Parallax>
          <Suspense fallback={<div>Loading...</div>}>
            <Separator />
          </Suspense>
          {/* <Gallery /> */}
          <section className="event__dont-miss">
            <Parallax strength={300} bgImage={celebrationBg}>
              <div className="event_min-height">
                <Plx parallaxData={parallaxData.dontMiss}>
                  <div className="mx-auto text-center text-white">
                    <p className="type-normal-48 primary-font">Te esperamos</p>
                    <p className="type-normal-48 primary-font">¡No Faltes!</p>
                    <div className="event__dont-miss--labels">
                      <p className="type-normal-48 primary-font">XV's</p>
                      <p className="type-normal-48 primary-font">Camila</p>
                    </div>
                  </div>
                </Plx>
              </div>
            </Parallax>
          </section>
          <div className="footer-bottom">
            Powered by @tikio27
          </div>
        </>
      )}
    </div>
  );
}

export default Events;