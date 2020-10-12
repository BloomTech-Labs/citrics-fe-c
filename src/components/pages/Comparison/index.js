import React, { useState, useEffect } from 'react';
import axios from 'axios';

// STYLES
import '../../../styles/ComparisonPage.less';

// COMPONENTS
import SearchPanel from '../../common/SearchPanel';
import CityCard from '../../common/CityCard';
import PlotlyCard from '../../common/PlotlyCard';
import CardContainer from '../../common/CardContainer';

const ComparisonPage = () => {
  return (
    <div className="comparisonContainer">
      {/* Search / City Cards */}
      <div className="sidebar">
        <SearchPanel />
      </div>
      {/* Plotly Cards */}
      <div className="content">
        <CardContainer Card={PlotlyCard} />
      </div>
    </div>
  );
};

export default ComparisonPage;
