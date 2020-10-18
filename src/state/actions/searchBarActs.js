import Axios from 'axios';

export const fetchCities = () => async (dispatch, getState) => {
  dispatch({ type: 'SEARCHBAR_FETCH_REQUEST' });

  Axios.get('https://labs27-c-citrics-api.herokuapp.com/cities/allid')
    .then(response => {
      dispatch({
        type: 'SEARCHBAR_FETCH_SUCCESS',
        payload: response.data.map(el => {
          return {
            value: `${el.citynamestate}`,
            id: el.cityid,
          };
        }),
      });
    })
    .catch(error =>
      dispatch({
        type: 'SEARCHBAR_FETCH_FAILURE',
        error,
      })
    );
};

export const filterCities = value => {
  return {
    type: 'SEARCHBAR_FILTER',
    userInput: value,
  };
};
