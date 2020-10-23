import Axios from 'axios';
import theme from '../../styles/themes';
import na from '../../utils/na';

const cityColors = [
  theme.dark.tangerineLight,
  theme.dark.magentaLight,
  theme.dark.skyLight,
];

export const fetchSpecificCityData = cityId => async (dispatch, getState) => {
  const currentCities = getState().cardContainer.cityData;
  // check if city is already in state
  if (currentCities) {
    if (currentCities.length >= 3) {
      return;
    }
    if (currentCities.length >= 1) {
      for (const city of currentCities) {
        if (city.cityid === cityId) {
          return;
        }
      }
    }
  }

  dispatch({ type: 'CARDCONTAINER_FETCH_REQUEST' });
  Axios.get(`https://labs27-c-citrics-api.herokuapp.com/cities/city/${cityId}`)
    .then(response => {
      response.data.color = cityColors[currentCities.length];
      response.data.colorIdx = currentCities.length;
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

export const removeCity = cityId => (dispatch, getState) => {
  const currentCities = getState().cardContainer.cityData;
  // check if city is already in state
  if (currentCities) {
    if (currentCities.length >= 1) {
      for (const city of currentCities) {
        if (city.cityid === cityId) {
          return dispatch({
            type: 'CARDCONTAINER_REMOVE',
            payload: currentCities.filter(city => city.cityid !== cityId),
          });
        }
      }
    }
  }
};

export const fetchNationalAverage = () => dispatch => {
  Axios.get('https://labs27-c-citrics-api.herokuapp.com/cities/avg').then(
    res => {
      dispatch({ type: 'FETCH_NATIONAL_AVG', payload: { ...res.data, ...na } }); //hard coded needs to be changed to end
    }
  );
};
