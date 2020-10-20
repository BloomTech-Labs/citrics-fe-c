import { combineReducers } from 'redux';
import { searchBarReducers } from './searchBarReducers';
import { cardContainerReducers } from './cardContainerReducers';
import { themeReducers } from './themeReducers';
import { cityCardReducers } from './cityCardReducers';
import { userReducers } from './userReducers';

export default combineReducers({
  theme: themeReducers,
  searchBar: searchBarReducers,
  cardContainer: cardContainerReducers,
  cityCard: cityCardReducers,
  userData: userReducers,
});
