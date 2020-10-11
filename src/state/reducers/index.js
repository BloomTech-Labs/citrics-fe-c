import { combineReducers } from 'redux';
import { searchBarReducers } from './searchBarReducers';
import { cardContainerReducers } from './cardContainerReducers';

export default combineReducers({
  searchBar: searchBarReducers,
  cardContainer: cardContainerReducers,
});
