import React from 'react';
import { Canvas } from '../../layouts';
import FavoritesPanel from '../../common/FavoritesPanel';
import { FileExcelFilled } from '@ant-design/icons';
import '../../../styles/FavoritesPage.less';

function Favorites() {
  return (
    <div
      id="title"
      style={{
        fontSize: 30,
        paddingTop: '15vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
        paddingBottom: '15vh',
      }}
    >
      {' '}
      View your favorite cities
      <div id="favorite-div">
        <FavoritesPanel />
      </div>
    </div>
  );
}

export default ({ styles }) => <Canvas Main={Favorites} />;
