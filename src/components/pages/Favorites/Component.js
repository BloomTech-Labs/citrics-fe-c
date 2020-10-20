import React from 'react';
import { Canvas } from '../../layouts';
import FavoritesPanel from '../../common/FavoritesPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { PlotlyCard } from '../../common';
import { useSelector } from 'react-redux';

export default ({ styles }) => {
  const favoriteCities = useSelector(state => state.userData.favoriteCities);
  const Blank = () => <div></div>;
  return (
    <Canvas
      Side={FavoritesPanel} //we need a "favorite panel"
      Main={() =>
        favoriteCities.length ? <CardContainer Card={PlotlyCard} /> : Blank
      }
    />
  );
};
