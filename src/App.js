import 'animate.css'; //npm install animate.css
import React from 'react';
import Countdown from './components/countdown';
import Events from './components/events';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Countdown />
              </Route>
              <Route path="/:id">
                  <Events/>
              </Route>
            </Switch>
          </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;