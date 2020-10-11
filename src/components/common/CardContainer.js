import React from 'react';
import { useHistory } from 'react-router';
import { nanoid } from 'nanoid';

// REDUX
import { useSelector } from 'react-redux';

// COMPONENTS
import PlotlyCard from './PlotlyCard';

// PLOTLY START
const graphLabels = [
  'Population Density',
  'Safety Rating',
  'Average Temperature',
  'Cost of Living',
];

export default function CardContainer() {
  const { filter, cityData, loading, error } = useSelector(
    state => state.cardContainer
  );

  return (
    <div>
      {cityData.length ? (
        graphLabels.map(label => (
          <PlotlyCard key={nanoid()} graphLabel={label} data={cityData} />
        ))
      ) : (
        <div />
      )}
    </div>
  );
}
