import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './styles';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

// COMPONENTS
import { PlotlyCard, CityCard } from '../../common';

// PLOTLY START
const graphLabels = [
  'Population',
  'Safety Rating',
  'Average Temperature',
  'Cost of Living',
];

export default ({ Card, display }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, []);

  const cityDataCopy = [];
  nationalAverage.color = theme.primaryDarker;
  cityData.forEach(city => {
    cityDataCopy.push(city);
  });
  cityDataCopy.push(nationalAverage);

  return Card === PlotlyCard ? (
    <div style={sty.plotlyCardContainer}>
      {graphLabels.map(label => (
        <Card key={nanoid()} graphLabel={label} data={cityDataCopy} />
      ))}
    </div>
  ) : (
    <div style={sty.cityCardContainer}>
      {/*<div className='search-results' style={sty.searchResultContainer}>*/}
      {cityData.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
      {/*</div>*/}
      {nationalAverage !== undefined ? (
        <CityCard key={nationalAverage.id} city={nationalAverage} />
      ) : (
        <div />
      )}
    </div>
  );
};
