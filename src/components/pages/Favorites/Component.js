import React from 'react';
import { Canvas } from '../../layouts';
import FavoritesPanel from '../../common/FavoritesPanel';

function Favorites() {
  return (
    <div
      id="title"
      style={{
        fontSize: 30,
        paddingTop: '35vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {' '}
      View your favorite cities
    </div>
  );
}

export default ({ styles }) => <Canvas Side={FavoritesPanel} Main={Favorites} />;
