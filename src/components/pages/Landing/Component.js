import React from 'react';
import { Canvas } from '../../layouts';
import { SearchPanel } from '../../common/';

// these functions are acting as jsx return statements, can be compartmentalized later.
function titleContainer() {
  return <div></div>;
}
function title() {
  return (
    <div
      id="title"
      style={{
        fontSize: 36,
        paddingTop: '30vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {' '}
      Where will you wander?
    </div>
  );
}

export default ({ styles }) => (
  <Canvas Side={[SearchPanel, title]} Main={titleContainer} />
);
