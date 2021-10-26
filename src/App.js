import 'animate.css'; //npm install animate.css
import React from 'react';
import Countdown from './components/countdown';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <Countdown />
        </main>
      </React.Fragment>
    );
  }
}

export default App;