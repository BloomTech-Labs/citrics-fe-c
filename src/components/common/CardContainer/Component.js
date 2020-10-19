import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

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

export default ({ Card, styles }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );

  const { theme, setTheme } = useSelector(state => state.theme);

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, []);

  const cityDataCopy = [];
  nationalAverage.color = 'red';
  cityData.forEach(city => {
    cityDataCopy.push(city);
  });
  cityDataCopy.push(nationalAverage);

  return Card === PlotlyCard ? (
    <div style={styles.plotlyCardContainer}>
      {graphLabels.map(label => (
        <Card key={nanoid()} graphLabel={label} data={cityDataCopy} />
      ))}
    </div>
  ) : (
    <div style={styles.cityCardContainer}>
      {cityData.map(city => (
        <CityCard key={city.id} city={city} />
      ))}

      {nationalAverage !== undefined ? (
        <CityCard key={nationalAverage.id} city={nationalAverage} />
      ) : (
        <div />
      )}
    </div>
  );
};
