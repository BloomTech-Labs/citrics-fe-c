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

const na = {
  cityid: 0,
  citynamestate: 'San Francisco, CA',
  population: 147764.216,
  populationdensityrating: 1,
  safteyratingscore: 2,
  costoflivingscore: 1,
  averageincome: 3022.216,
  averagetemperature: 2,
  lat: 1.4499112,
  lon: -3.5092895,
  averageage: 38.95039999999999,
  averagehouseholdincome: 77554.112,
  averageindividualincome: 38764.272,
  averagehouseingcost: 0.0,
  averagerentcost: 1557.232,
  costoflivingindex: 55.5,
  users: [],
};

export const fetchNationalAverage = () => dispatch => {
  dispatch({ type: 'FETCH_NATIONAL_AVG', payload: na });
  // Axios.get('https://labs27-c-citrics-api.herokuapp.com/cities/avg').then(
  //   res => {
  //     dispatch({ type: 'FETCH_NATIONAL_AVG', payload: res.data });
  //   }
  // );
};
