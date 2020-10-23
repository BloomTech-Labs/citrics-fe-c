import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
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
  'Average Household Income',
  'Average Home Price',
  'Average Temperature',
];

export default ({ Card, display }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  const calculateAverage = data => {
    let average = 0;
    for (let i = 0; i < data.length; i++) {
      average += data[i].temperature;
    }
    return Math.round(average / data.length);
  };

  const getYearlyHistory = data => {
    let d = {};
    let newYearlyAverage = [];

    for (let i = 0; i < data.length; i++) {
      if (d[data[i].year] !== undefined) {
        d[data[i].year] += data[i].housingcost;
      } else {
        d[data[i].year] = data[i].housingcost;
      }
    }

    for (const [key, value] of Object.entries(d)) {
      d[key] = { year: key, housingcost: Math.floor(value / 12) };
      newYearlyAverage.push(d[key]);
    }

    return newYearlyAverage;
  };

  const cityDataCopy = [];
  nationalAverage.color = theme.primaryDarker;
  nationalAverage.averagetemperature = '52.4';
  cityData.forEach(city => {
    city.averagetemperature = calculateAverage(city.historicalweather);
    city.historicalyearlyhousecost = getYearlyHistory(
      city.historicalaveragehouse
    );
    cityDataCopy.push(city);
  });
  cityDataCopy.push(nationalAverage);

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, [cityData]);

  return Card === PlotlyCard ? (
    <div style={sty.plotlyCardContainer}>
      <FadeIn childTag="div">
        {graphLabels.map(label => (
          <Card key={nanoid()} graphLabel={label} data={cityDataCopy} />
        ))}
      </FadeIn>
    </div>
  ) : (
    <div style={sty.cityCardContainer}>
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
