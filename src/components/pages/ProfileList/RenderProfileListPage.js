import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../common/UploadAvatar/Avatar';
import '../../../styles/ProfilePage.less';

const RenderProfileListPage = props => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    id: props.data.id,
    name: props.data.name,
    email: props.data.email,
    avatar: props.data.avatar,
  });

  const editUser = user => {
    setEditing(true);
    setUser({ ...user, password: '' });
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

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
          <Avatar src={user.avatar} />
        </div>
        <div>
          <h3 style={{ color: 'white' }}>Name: {user.name}</h3>
          <h3 style={{ color: 'white' }}>Email: {user.email}</h3>
        </div>
      </section>

      <section>
        <button onClick={() => editUser(props.data)}>Edit</button>
        {editing && (
          <form>
            <h3 style={{ color: 'white' }}>Edit Profile</h3>
            <input
              label="name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />
            <input
              label="email"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <button onClick={() => setEditing(false)}>Cancel</button>
          </form>
        )}
      </section>
    </div>
  );
};

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
