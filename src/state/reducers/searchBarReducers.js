const initState = {
  cityData: [],
  filter: '',
  loading: false,
  error: null,
};

export const searchBarReducers = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        cityData: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.value,
      };
    default:
      return state;
  }
};
