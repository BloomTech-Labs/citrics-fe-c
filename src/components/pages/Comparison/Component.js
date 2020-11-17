import React from 'react';
import { Canvas } from '../../layouts';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { PlotlyCard } from '../../common';
import { useSelector } from 'react-redux';

function comparison() {
  // const cityData = useSelector(state => state.cardContainer.cityData);
  // const Blank = () => <div>Please add a city</div>;

  return (
    <div className="main">
      <SearchPanel />
      {/* {() => cityData.length ? <CardContainer Card={PlotlyCard} /> : Blank} */}
      <CardContainer Card={PlotlyCard} />
    </div>
  );
}

export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);
  const Blank = () => <div>Please add a city</div>;
  return (
    <Canvas
      // Side={SearchPanel}
      Main={[comparison]}
    />
  );
};
