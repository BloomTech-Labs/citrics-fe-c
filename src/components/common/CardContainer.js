import React from 'react';
import { useHistory } from 'react-router';
import { nanoid } from 'nanoid';

// REDUX
import { useSelector } from 'react-redux';

// COMPONENTS
import PlotlyCard from './PlotlyCard';
import CityCard from './CityCard';

// PLOTLY START
const graphLabels = [
  'Population Density',
  'Safety Rating',
  'Average Temperature',
  'Cost of Living',
];

export default function CardContainer({ Card }) {
  const { filter, cityData, loading, error } = useSelector(
    state => state.cardContainer
  );

  return Card == PlotlyCard ? (
    <div style={{ width: '100%' }}>
      {cityData.length ? (
        graphLabels.map(label => (
          <Card key={nanoid()} graphLabel={label} data={cityData} />
        ))
      ) : (
        <div />
      )}
    </div>
  ) : (
    <div style={{ width: '100%', height: '500px' }}>
      {cityData.length ? (
        cityData.map(city => (
          <CityCard
            key={city.id}
            city={city}
            //cityImage=""
            //cityAlt=""
          />
        ))
      ) : (
        <div />
      )}
    </div>
  );
}
