import { ConsoleSqlOutlined } from '@ant-design/icons';
import Axios from 'axios';

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

  Axios.get(`http://labs27-c-citrics-api.herokuapp.com/cities/city/${cityId}`)
    .then(response => {
      console.log(response.data);
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
