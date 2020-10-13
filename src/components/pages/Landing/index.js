import React from 'react';
import Canvas from '../../layouts/Canvas';
import SearchBar from '../../common/SearchBar';

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

export default () => <Canvas Side={[SearchBar, title]} Main={titleContainer} />;
