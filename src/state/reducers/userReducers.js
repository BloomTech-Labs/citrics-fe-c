const initState = {
  favoriteCities: [],
  displayName: '',
};

export const userReducers = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_CITY':
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    case 'REMOVE_FAVORITE_CITY':
      return {
        ...state,
        favoriteCities: action.payload,
      };
    case 'UPDATE_DISPLAY_NAME':
      return {
        ...state,
        displayName: action.payload,
      };
    default:
      return state;
  }
};
