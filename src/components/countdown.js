import './countdown.scss'
import React from 'react';
import moment from 'moment';
import Delayed from './utils/delayed';

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
    this.videoUrl = '/assets/videos/firewalls-copy.mp4';
  }


  startCountdown() {
    clearInterval(this.timer);
    this.timer = null;
    const endDate = Number(moment(`${this.state.dateValue} ${this.state.timeValue} ${this.state.ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X'))
    console.log(endDate)

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
                <div className="animate__animated animate__zoomIn">
                  <div className="countdown-header">
                    <span>Proximamente</span>
                    <div className="countdown-header-title">
                      <p>Camila</p>
                    </div>
                    <div className="countdown-header-desc">
                      <p>Mis XV Años</p>
                    </div>
                  </div>
                  <div className="d-sm-flex">
                    <div className="card">
                      <div className="countdown-value">{this.state.countdown.days}</div>
                      <div className="countdown-unit">Dias</div>
                    </div>
                    <div class="d-flex align-items-center mr-5 ml-5 mt-n4"><span class="f-title ">:</span></div>
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
                  <p className="save-date">Sabado 12 de Febrero 2022</p>
                  <p className="save-date">Guadalajara, Jalisco</p>
                </div>
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