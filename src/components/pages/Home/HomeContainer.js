import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Canvas from '../../layouts/Canvas';
import SearchBar from '../../common/SearchBar';
import RenderHomePage from './RenderHomePage';

// these functions are acting as jsx return statements, can be compartmentalized later.
function titleContainer() {
  return <div></div>;
}
function title() {
  return (
    <div
      id="title"
      style={{
        fontSize: 48,
        paddingTop: '30vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {' '}
      Looking for a new place to call home?
    </div>
  );
}

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], [])

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      )}
      <Canvas Side={[SearchBar, title]} Main={titleContainer} />
    </>
  );
}

export default HomeContainer;
