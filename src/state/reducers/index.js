import { combineReducers } from 'redux';
import { searchBarReducers } from './searchBarReducers';
import { cardContainerReducers } from './cardContainerReducers';
import { themeReducers } from './themeReducers';

export default combineReducers({
  theme: themeReducers,
  searchBar: searchBarReducers,
  cardContainer: cardContainerReducers,
});
