import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import Events from './components/events';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
class App extends React.Component {

  render() {
    return (
      <ParallaxProvider>
        <main>
          <Router>
            <Switch>
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