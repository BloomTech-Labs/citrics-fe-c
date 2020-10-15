import React from 'react';
import { CardContainer, CityCard, SearchBar } from '../../common';
//import '../../styles/style.less';

export default () => (
  <div className="search-container" style={{ width: '100%' }}>
    <SearchBar />
    <CardContainer Card={CityCard} />
  </div>
);
