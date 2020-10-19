import React from 'react';
import { Canvas } from '../../layouts';
import SearchBar from '../../common/SearchBar';
import '../../../styles/ComparisonPage.less';

function favtitle() {
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
      Your favorite cities are saved on the left. Select up to three and see how
      they stack up against each other!
    </div>
  );
}

export default ({ styles }) => <Canvas Side={SearchBar} Main={favtitle} />;
