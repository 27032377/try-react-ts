import * as React from 'react';
import { Provider } from 'react-redux';
import store from '@store/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@view/login/Index';
import Home from '@view/home/Index';
import App from '@/App';

class Routes extends React.Component {
  public render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default Routes;