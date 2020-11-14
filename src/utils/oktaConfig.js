const config = {
  issuer: 'https://auth.lambdalabs.dev/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oavso7p45Q1PRKSk4x6',
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
// REACT_APP_CLIENT_ID=0oavso7p45Q1PRKSk4x6l
// REACT_APP_OKTA_ISSUER_URI="https://auth.lambdalabs.dev/oauth2/default"
// REACT_APP_API_URI="https://citrics-be-teamc.herokuapp.com/"
