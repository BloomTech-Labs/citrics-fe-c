import React from 'react';
import { Canvas } from '../../layouts';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { PlotlyCard } from '../../common';
import { useSelector } from 'react-redux';

export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);

  return (
    <Canvas
      Side={SearchPanel}
      Main={() => <CardContainer Card={cityData.length ? PlotlyCard : false} />}
    />
  );
};
