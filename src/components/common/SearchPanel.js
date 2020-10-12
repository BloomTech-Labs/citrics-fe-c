import React from 'react';
import CardContainer from './CardContainer';
import CityCard from './CityCard';
import SearchBar from './SearchBar';
//import '../../styles/style.less';

function SearchPanel() {
  return (
    <div className="search-container" style={{ width: '100%' }}>
      <SearchBar />
      <CardContainer Card={CityCard} />
    </div>
  );
}

export default SearchPanel;
