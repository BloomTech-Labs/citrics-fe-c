import Axios from 'axios';
import theme from '../../styles/themes';
const cityColors = [
  theme.dark.tangerine,
  theme.dark.magenta,
  theme.dark.sky,
  theme.dark.bgLight,
];

export const fetchSpecificCityData = cityId => async (dispatch, getState) => {
  const currentCities = getState().cardContainer.cityData;
  // check if city is already in state
  if (currentCities) {
    if (currentCities.length >= 1) {
      for (const city of currentCities) {
        if (city.cityid == cityId) {
          return;
        }
      }
    }
  }

  dispatch({ type: 'CARDCONTAINER_FETCH_REQUEST' });

  Axios.get(`https://labs27-c-citrics-api.herokuapp.com/cities/city/${cityId}`)
    .then(response => {
      response.data.color = cityColors[currentCities.length];
      dispatch({
        type: 'CARDCONTAINER_FETCH_SUCCESS',
        payload: response.data,
      });
    })
    .catch(error =>
      dispatch({
        type: 'CARDCONTAINER_FETCH_FAILURE',
        error,
      })
    );
};
