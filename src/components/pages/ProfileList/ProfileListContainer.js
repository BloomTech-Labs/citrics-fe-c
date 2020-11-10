import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { getProfileData } from '../../../api';

import List from '../../common/List/Component.js';

import RenderProfileListPage from './RenderProfileListPage';

import { Canvas } from '../../layouts';

// import Avatar from '../../common/UpdateAvatar/Avatar';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  const { authState, authService } = useOktaAuth();

  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={() => getProfileData(authState, authService)}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Profiles...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderProfileListPage}
    />
  );
};

export default ({ styles }) => <Canvas Main={ProfileList} />;
// export default ProfileList;
