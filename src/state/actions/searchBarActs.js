import Axios from 'axios';

export const fetchCities = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });

  Axios.get('http://labs27-c-citrics-api.herokuapp.com/cities/all')
    .then(response =>
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: response.data.map(el => {
          return {
            value: `${el.cityname}, ${el.citystate}`,
            id: el.cityid,
          };
        }),
      })
    )
    .catch(error =>
      dispatch({
        type: 'FETCH_FAILURE',
        error,
      })
    );
};

export const filterCities = value => {
  console.log(value);
  return {
    type: 'FILTER',
    userInput: value,
  };
};
