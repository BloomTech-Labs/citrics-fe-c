import Axios from 'axios';
import theme from '../../styles/themes';
const weatherAPIKey = '43da56af66734b79b13212632201910';
const cityColors = [
  theme.dark.tangerineLight,
  theme.dark.magentaLight,
  theme.dark.skyLight,
  theme.dark.bgLight,
];

export const fetchSpecificCityData = (cityId, query) => async (
  dispatch,
  getState
) => {
  const currentCities = getState().cardContainer.cityData;
  // check if city is already in state
  if (currentCities) {
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
      Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${encodeURI(
          query
        )}`
      ).then(res => {
        response.data.averagetemperature = res.data.current.temp_f;
      });
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
      dispatch({ type: 'FETCH_NATIONAL_AVG', payload: res.data });
    }
  );
};
