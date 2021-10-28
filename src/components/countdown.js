import './countdown.scss'
import React from 'react';
import moment from 'moment';
import Delayed from './utils/delayed';
import Tilt from 'react-parallax-tilt';

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateValue: '02-12-2022',
      timeValue: '06:00',
      ampmValue: 'pm',
      countdown: {
        days: '',
        hours: '',
        mins: '',
        secs: ''
      }
    };
    this.timer = null;
    this.videoUrl = '/assets/videos/firewalls.mp4';
  }


  startCountdown() {
    clearInterval(this.timer);
    this.timer = null;
    const endDate = Number(moment(`${this.state.dateValue} ${this.state.timeValue} ${this.state.ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X'))

    if (endDate && endDate !== '') {
      this.timer = setInterval(() => this.playTimer(endDate), 1000);
    }
  }

  playTimer(unixEndDate) {
    const distance = unixEndDate - moment().format('X');

    if (distance > 0) {
      this.setState({
        countdown: {
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
          mins: parseInt(distance % (60 * 60) / (60), 10),
          secs: parseInt(distance % 60, 10)
        }
      });
    }
    else {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <section id="slider" className="slider-element min-vh-100 dark include-header">
			  <div className="slider-inner">
          {this.timer && (
            <Delayed waitBeforeShow={2000}>
                <div className="countdown">
                  <Tilt
                    className="track-on-window parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glarePosition="all"
                    trackOnWindow={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                  >
                    <div className="animate__animated animate__zoomIn inner-element">
                      <div className="countdown-header">
                        <span>XV's Camila</span>
                        <div className="countdown-header-title">
                          <span>Nos vemos en</span>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-center ">
                        <div className="card">
                          <div className="countdown-value">{this.state.countdown.days}</div>
                          <div className="countdown-unit">Dias</div>
                        </div>
                        <div className="card">
                          <div className="countdown-value">{this.state.countdown.hours}</div>
                          <div className="countdown-unit">Horas</div>
                        </div>
                        <div className="card">
                          <div className="countdown-value">{this.state.countdown.mins}</div>
                          <div className="countdown-unit">Minutos</div>
                        </div>
                        <div className="card">
                          <div className="countdown-value">{this.state.countdown.secs}</div>
                          <div className="countdown-unit">Segundos</div>
                        </div>
                      </div>
                      <span className="save-date d-block">Sabado 12 de Febrero 2022</span>
                      <span className="save-date d-block">Guadalajara, Jalisco</span>
                    </div>
                  </Tilt>
                </div>
            </Delayed>
          )}

          <div className="video-wrap">
            <video preload="true" muted autoPlay loop>
              <source src={this.videoUrl} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
          </div>
        </div>

      </section>
    );
  }
}

export default Countdown;