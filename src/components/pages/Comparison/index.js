import React from 'react';
import Canvas from '../../layouts/Canvas';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import PlotlyCard from '../../common/PlotlyCard';

export default () => (
  <Canvas Side={SearchPanel} Main={() => <CardContainer Card={PlotlyCard} />} />
);
