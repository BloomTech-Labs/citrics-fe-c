const initState = {
  cityData: [],
  nationalAverage: {},
  cityColor: '',
  filter: '',
  loading: false,
  error: null,
};

export const cardContainerReducers = (state = initState, action) => {
  switch (action.type) {
    case 'CARDCONTAINER_FETCH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'CARDCONTAINER_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        cityData: [...state.cityData, action.payload],
      };
    case 'CARDCONTAINER_FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'CARDCONTAINER_FILTER':
      return {
        ...state,
        filter: action.value,
      };

    case 'CARDCONTAINER_REMOVE':
      return {
        ...state,
        cityData: action.payload,
      };

    case 'FETCH_NATIONAL_AVG':
      return {
        ...state,
        nationalAverage: action.payload,
      };

    default:
      return state;
  }
};
