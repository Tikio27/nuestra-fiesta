import './index.scss'
import React from 'react';
import moment from 'moment';

class CountdownCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateValue: this.props.date,
      timeValue: this.props.time,
      ampmValue: 'pm',
      countdown: {
        days: '',
        hours: '',
        mins: '',
        secs: ''
      }
    };
    this.timer = null;
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
      <div className="countdown-cards">
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
      </div>
    );
  }
}

export default CountdownCards;