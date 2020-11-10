import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../../common/UpdateAvatar/Avatar';

const RenderProfileListPage = props => (
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
          {props.data.name}
        </h1>
      </div>
      <div>
        <h3 style={{ color: 'white' }}>Location: Seattle, WA</h3>
        <h3 style={{ color: 'white' }}>Username: laurenemick</h3>
        <h3 style={{ color: 'white' }}>Email: {props.data.email}</h3>
        <h3 style={{ color: 'white' }}>Phone: (123) 456-7890</h3>
      </div>
    </section>

    {/* {props.data.map(item => (
      <figure key={item.id}>
        <img src={item.avatarUrl} alt={item.name} />
        <figcaption>
          <h3 style={{color: 'white'}}>{item.username}</h3>
        </figcaption>
        <h3 style={{color: 'white'}}>{item.name}</h3>
      </figure>
    ))} */}
  </div>
);

export default RenderProfileListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderProfileListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
