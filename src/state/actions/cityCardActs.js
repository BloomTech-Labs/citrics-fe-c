import Axios from 'axios';

export const fetchCityCardImage = cityNameState => (dispatch, getState) => {
  const currentImages = getState().cityCard.cityImages;
  // check if image is already in state
  if (currentImages) {
    if (currentImages[cityNameState]) {
      return;
    }
  }
  if (cityNameState !== undefined) {
    dispatch({ type: 'CITYCARD_IMAGE_FETCH_REQUEST' });
    Axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${
        cityNameState === 'National Average, USA'
          ? 'United States'
          : encodeURI(cityNameState)
      }`
    )
      .then(res => {
        Axios.get(
          `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=${encodeURI(
            res.data.query.search[0].title
          )}`
        ).then(res2 => {
          dispatch({
            type: 'CITYCARD_IMAGE_FETCH_SUCCESS',
            key: cityNameState,
            payload: res2.data.query.pages[0].original.source,
          });
        });
      })
      .catch(error => {
        dispatch({
          type: 'CITYCARD_IMAGE_FETCH_FAILURE',
          error,
        });
      });
  }
};
