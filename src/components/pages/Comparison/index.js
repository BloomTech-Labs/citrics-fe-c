import React, { useState, useEffect } from 'react';
import axios from 'axios';

// STYLES
import '../../../styles/ComparisonPage.less';
import { CloudOutlined, SafetyOutlined, TeamOutlined } from '@ant-design/icons';

// COMPONENTS
import SearchBar from '../../common/SearchBar';
import PlotlyCard from '../../common/PlotlyCard';
import CityCard from '../../common/CityCard';

// PLOTLY START
const plotlyNames = ['Population', 'Cost of Living', 'Average Temperature'];
const cityAttrIcons = [
  <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  <SafetyOutlined style={{ fontSize: '1.5rem' }} />,
  <CloudOutlined style={{ fontSize: '1.5rem' }} />,
];
const getPlotlyAttr = plotlyName => {
  switch (plotlyName) {
    case 'Population':
      return 'population_density_rating';
    case 'Cost of Living':
      return 'cost_of_living_score';
    case 'Average Temperature':
      return 'average_temperature';
    default:
      return 'not found';
  }
}; // PLOTLY END

const payload = [
  {
    id: 24,
    city: 'Austin',
    state: 'Texas',
    population_density_rating: 68,
    safety_rating_score: 44,
    cost_of_living_score: 76,
    average_income: 36005,
    average_temperature: 63,
    lat: 30.3264,
    long: -97.7713,
  },
  {
    id: 25,
    city: 'Monticello',
    state: 'Minnesota',
    population_density_rating: 89,
    safety_rating_score: 43,
    cost_of_living_score: 7,
    average_income: 46269,
    average_temperature: 58,
    lat: 45.2009,
    long: -93.8881,
  },
  {
    id: 26,
    city: 'Springfield',
    state: 'Illinois',
    population_density_rating: 40,
    safety_rating_score: 92,
    cost_of_living_score: 32,
    average_income: 69231,
    average_temperature: 62,
    lat: 39.7495,
    long: -89.606,
  },
];

const ComparisonPage = () => {
  const [cityData, setCityData] = useState([]);

  //use city id 3 for testing a single city

  useEffect(() => {
    //this pulls in the data for the city cards
    axios
      .get('https://labs27-c-citrics-api.herokuapp.com/cities/all')
      .then(res => {
        setCityData(res.data);
        console.log(cityData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="comparisonContainer">
      {/* Search / City Cards */}
      <div className="sidebar">
        <SearchBar />
        {cityData.map(city => {
          return (
            <CityCard
              key={city.cityid}
              cityImage=""
              cityAlt=""
              cityName={city.cityname}
              cityState={city.citystate}
              cityColor=""
              cityAttr_1={city.populationdensityrating}
              cityAttr_2={city.averageage}
              cityAttr_3={city.averagehouseholdincome}
              cityAttr_4={city.averagetemperature}
            />
          );
        })}
      </div>

      {/* Plotly Cards */}
      <div className="content">
        {payload.map((city, i) => {
          return (
            <PlotlyCard
              plotlyType="bar"
              plotlyIcon={cityAttrIcons[i]}
              plotlyName={plotlyNames[i]}
              data={payload}
              by={getPlotlyAttr(plotlyNames[i])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonPage;
