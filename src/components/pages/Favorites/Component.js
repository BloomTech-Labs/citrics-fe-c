import React, { useEffect } from 'react';
import { Canvas } from '../../layouts';
import SearchBar from '../../common/SearchBar';
import CityCard from '../../common/CityCard/Component.js';
import '../../../styles/ComparisonPage.less';
import axios from 'axios';

//156, 320, 747, 1177

function Favorites() {
  useEffect(() => {
    axios
      .get(`https://labs27-c-citrics-api.herokuapp.com/cities/city/156`)
      .then(response => {
        console.log(response);
        dummyFavorites.push(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const dummyFavorites = [];
  return (
    <div
      id="title"
      style={{
        fontSize: 30,
        paddingTop: '35vh',
        lineHeight: '48px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {' '}
      View your favorite cities 🏙️
      <div>
        {dummyFavorites.map(city => {
          return <CityCard city={city} />;
        })}
      </div>
    </div>
  );
}

export default ({ styles }) => <Canvas Main={Favorites} />;
