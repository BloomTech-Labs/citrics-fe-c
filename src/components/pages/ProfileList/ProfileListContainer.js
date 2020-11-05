import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { getProfileData } from '../../../api';

import { List } from '../../common';

import RenderProfileListPage from './RenderProfileListPage';

import { Canvas } from '../../layouts';

import Avatar from '../../common/UploadAvatar/Avatar.js';

// Here is an example of using our reusable List component to display some list data to the UI.
function ProfileList() {
  // const { authState } = useOktaAuth();

  return (
    <div>
      <section
        style={{
          marginTop: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ paddingRight: '6%' }}>
          <Avatar />
          <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '4%' }}>
            Lauren Emick
          </h1>
          <h1 style={{ color: 'white', textAlign: 'center' }}>Seattle, WA</h1>
        </div>
        <div>
          <h3 style={{ color: 'white' }}>Username: laurenemick</h3>
          <h3 style={{ color: 'white' }}>Email: lauren@lauren.com</h3>
          <h3 style={{ color: 'white' }}>Phone: (123) 456-7890</h3>
        </div>
      </section>
    </div>

    // <div style={{marginTop: '10%'}}>
    //   <h1 style={{color: 'white'}}>Hi</h1>
    // </div>

    // <List
    //   // Here we are passing our Axios request helper function as a callback.
    //   getItemsData={() => getProfileData(authState)}
    //   // Here we are passing in a component we want to show whilst waiting for our API request
    //   // to complete.
    //   LoadingComponent={() => <div>Loading Profiles...</div>}
    //   // Here we are passing in a component that receives our new data and returns our JSX elements.
    //   RenderItems={RenderProfileListPage}
    // />
  );
}

// export default ProfileList;
export default ({ styles }) => <Canvas Main={ProfileList} />;
