import React, { useEffect } from 'react';
import { CityCard } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector } from 'react-redux';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const favorites = useSelector(state => state.userData.favoriteCities);
  const sty = styles(display, theme);

  console.log(favorites);
  return (
    <div>
      {favorites.map(city => {
        return <CityCard city={city} style={sty} />;
      })}
    </div>
  );
};
