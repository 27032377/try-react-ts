import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// const Login = require('@view/login/Index');
// const App = require('@/App');
import Login from '../views/login/Index';
import Home from '../views/home/Index';
import App from '../App';

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={props => <Login {...props} />}
            />
          </Switch>
        </App>
      </Router>
    )
  }
}

export default Routes;