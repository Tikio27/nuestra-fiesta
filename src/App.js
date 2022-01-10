import './App.scss';
import 'animate.css'; //npm install animate.css
import React from 'react';
import Events from './components/events';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import InfoCardEvent from './components/info-card-event';
import GiftSection from './components/events/giftSection';
import GiftOptions from './components/gift-options';
import Thanks from './components/thanks-section';

class App extends React.Component {

  render() {
    return (
      <ParallaxProvider>
        <main>
          <Router>
            <Switch>
              <Route path="/thanks">
                <Thanks />
              </Route>
              <Route path="/test">
                <GiftOptions />
              </Route>
              <Route path="/gift">
                <GiftSection />
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