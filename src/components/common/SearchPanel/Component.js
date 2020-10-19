import React from 'react';
import { CardContainer, CityCard, SearchBar } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';

import { useSelector } from 'react-redux';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div className="search-container" style={sty.container}>
      <SearchBar />
      <CardContainer Card={CityCard} />
    </div>
  );
};
