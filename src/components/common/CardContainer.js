import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { nanoid } from 'nanoid';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../state/actions';

// COMPONENTS
import PlotlyCard from './PlotlyCard';
import CityCard from './CityCard';

// PLOTLY START
const graphLabels = [
  'Population',
  'Safety Rating',
  'Average Temperature',
  'Cost of Living',
];

export default function CardContainer({ Card }) {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, []);

  const cityDataCopy = [];
  nationalAverage.color = '#FFF';
  cityData.forEach(city => {
    cityDataCopy.push(city);
  });
  cityDataCopy.push(nationalAverage);

  return Card === PlotlyCard ? (
    <div style={{ width: '100%' }}>
      {graphLabels.map(label => (
        <Card key={nanoid()} graphLabel={label} data={cityDataCopy} />
      ))}
    </div>
  ) : (
    <div style={{ width: '100%', height: '500px' }}>
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
}
