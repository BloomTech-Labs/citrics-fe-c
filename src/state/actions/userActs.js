import axios from 'axios';

export const saveFavorite = favoriteCity => (dispatch, getState) => {
  // check if city is already in state
  const currentFavorites = getState().userData.favoriteCities;
  for (const city of currentFavorites) {
    if (city.cityid === favoriteCity.id) {
      return;
    }
  }

  dispatch({
    type: 'ADD_FAVORITE_CITY',
    payload: favoriteCity,
  });
};

export const removeFavorite = cityId => (dispatch, getState) => {
  const currentFavorites = getState().userData.favoriteCities;
  // check if city is already in state
  return dispatch({
    type: 'REMOVE_FAVORITE_CITY',
    payload: currentFavorites.filter(city => city.cityid !== cityId),
  });
};
