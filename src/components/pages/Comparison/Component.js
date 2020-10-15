import React from 'react';
import { Canvas } from '../../layouts';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { PlotlyCard } from '../../common';

export default ({ styles }) => (
  <Canvas Side={SearchPanel} Main={() => <CardContainer Card={PlotlyCard} />} />
);
