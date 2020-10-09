import { combineReducers } from 'redux';
import { searchBarReducers } from './searchBarReducers';

export default combineReducers({
  searchBar: searchBarReducers,
});
