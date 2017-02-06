import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Import view components
import {
  AboutView,
  HomeView,
  NotFoundView
} from './components/views/index.js';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/about" component={AboutView} />

            {/* If none of those match, then a sibling `Miss` will render. */}
            <Route component={NotFoundView}/>
          </Switch>
        </div>
      </Router>
    );
  }

}
