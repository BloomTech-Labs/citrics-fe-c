const initState = {
  cityImages: {},
  cityImageLoading: false,
  cityImageError: null,
};

export const cityCardReducers = (state = initState, action) => {
  switch (action.type) {
    case 'CITYCARD_IMAGE_FETCH_REQUEST':
      return {
        ...state,
        cityImageLoading: true,
        error: null,
      };

    case 'CITYCARD_IMAGE_FETCH_SUCCESS':
      return {
        ...state,
        cityImageLoading: false,
        cityImages: {
          ...state.cityImages,
          [action.key]: action.payload,
        },
      };

    case 'CITYCARD_IMAGE_FETCH_FAILURE':
      return {
        ...state,
        cityImageLoading: false, //we should probably set a default image here
        cityImageError: action.error,
      };

    default:
      return state;
  }
};
