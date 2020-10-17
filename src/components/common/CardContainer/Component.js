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

export default ({ Card }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, []);

  // const cityDataCopy = [];
  nationalAverage.color = 'yellow';
  // cityData.forEach(city => {
  //   cityDataCopy.push(city);
  // });
  // cityDataCopy.push(nationalAverage);

  return Card === PlotlyCard ? (
    <div style={{ width: '100%' }}>
      {graphLabels.map(label => (
        <Card key={nanoid()} graphLabel={label} data={cityData} />
      ))}
    </div>
  ) : (
    <div style={{ width: '100%' }}>
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
