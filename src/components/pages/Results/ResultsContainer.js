import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from '../../common/CityCard.js';

function ResultsContainer() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    //this pulls in the data for the city cards
    axios
      .get('https://labs27-c-citrics-api.herokuapp.com/cities/all')
      .then(res => {
        console.log(res);
        setCityData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
  );
}

export default ResultsContainer;
