import './App.scss';
import React from 'react';
import Events from './events';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
class App extends React.Component {

  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.getElementById('loader-container');
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <ParallaxProvider>
        <main>
          <Events />
          {/* <Router>
            <Switch>
              <Route path="/:id/:guest">
                  <Events/>
              </Route>
              <Route path="/:id/">
                <Events />
              </Route>
            </Switch>
          </Router> */}
        </main>
      </ParallaxProvider>
    );
  }
}

export default App;