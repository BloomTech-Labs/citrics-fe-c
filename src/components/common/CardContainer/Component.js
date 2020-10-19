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
  'Average Age',
  'Cost of Living',
  'Average Temperature',
];

export default ({ Card, styles }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );

  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  const calculateAverage = data => {
    let average = 0;
    for (let i = 0; i < data.length; i++) {
      average += data[i].temperature;
    }
    return Math.round(average / data.length);
  };

  const cityDataCopy = [];
  nationalAverage.color = theme.primaryDarker;
  nationalAverage.averagetemperature = '52.4';
  cityData.forEach(city => {
    city.averagetemperature = calculateAverage(city.historicalweather);
    cityDataCopy.push(city);
  });
  cityDataCopy.push(nationalAverage);

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, [cityData]);

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
