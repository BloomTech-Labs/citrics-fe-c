import React, { useEffect } from 'react';
import { CardContainer, CityCard, SearchBar } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector } from 'react-redux';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const cardContainer = useSelector(state => state.cardContainer);
  const sty = styles(display, theme);

  return !cardContainer.cityData.length ? (
    <div
      className="search-container"
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <SearchBar />
    </div>
  ) : (
    <div className="search-container" style={sty.container}>
      <SearchBar />
      <CardContainer Card={CityCard} />
    </div>
  );
};
