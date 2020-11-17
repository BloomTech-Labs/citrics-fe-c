import React, { useEffect } from 'react';
import { CardContainer, CityCard, SearchBar } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector } from 'react-redux';
import '../../../styles/ComparisonPage.less';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const cardContainer = useSelector(state => state.cardContainer);
  const sty = styles(display, theme);

  return !cardContainer.cityData.length ? (
    <div
      className="search-container"
      // style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  ) : (
    <div className="search-container">
      <div className="search-bar">
        <SearchBar />
      </div>
      <CardContainer className="searched-city" Card={CityCard} />
    </div>
  );
};
