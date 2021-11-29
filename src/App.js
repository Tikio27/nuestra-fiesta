import './App.scss';
import 'animate.css'; //npm install animate.css
import React from 'react';
import Events from './components/events';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import InfoCardEvent from './components/info-card-event';

class App extends React.Component {

  render() {
    return (
      <ParallaxProvider>
        <main>
          <Router>
            <Switch>
              <Route path="/info-card">
                <InfoCardEvent />
              </Route>
              <Route path="/:id/:guest">
                  <Events/>
              </Route>
              <Route path="/:id/">
                <Events />
              </Route>
            </Switch>
          </Router>
        </main>
      </ParallaxProvider>
    );
  }
}

export default App;