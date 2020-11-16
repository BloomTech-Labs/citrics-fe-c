import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { config } from './utils/oktaConfig';
import 'antd/dist/antd.less';
import ProfileList from './components/pages/ProfileList/ProfileListContainer';
import {
  NotFoundPage,
  LoginPage,
  ComparisonPage,
  LandingPage,
  FavoritesPage,
  ProfileList,
} from './components/pages';

// import ProfileListPage from './components/pages/ProfileList/ProfileListContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();
  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/compare" component={ComparisonPage} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/profile" component={ProfileList} />
      {/* temporairly putting the landing component until we have a profile/favorites page */}
      <Security {...config} onAuthRequired={authHandler}>
        <SecureRoute path="/profile" component={ProfileList} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <SecureRoute path="/favorites" exact component={FavoritesPage} />
      </Security>
      <Route component={NotFoundPage} />
    </Switch>
  );
}
