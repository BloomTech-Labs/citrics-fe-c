import React, { useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarActs, cardContainerActs } from '../../../state/actions';
import { useHistory, useLocation } from 'react-router-dom';
import '../../../styles/style.less';

function SearchBar() {
  const history = useHistory();
  const currentLocation = useLocation().pathname;
  const dispatch = useDispatch();
  const { fetchSpecificCityData } = cardContainerActs;
  const { fetchCities, filterCities } = searchBarActs;
  const { filter, cityData, loading, error } = useSelector(
    state => state.searchBar
  );
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const onChange = value => dispatch(filterCities(value));
  // you can pass the object id to global state from here
  const onSelect = (value, city) => {
    if (currentLocation != '/compare') history.push('/compare');
    dispatch(fetchSpecificCityData(city.id, city.value));
  };

  return (
    <AutoComplete
      defaultValue={filter}
      options={cityData}
      style={{ width: '100%' }}
      onSelect={onSelect}
      defaultActiveFirstOption={true}
      onChange={onChange}
      filterOption={true}
      dropdownMatchSelectWidth={true}
    >
      <Input
        placeholder="Search"
        id="mainSearchInput"
        prefix={
          <LeftOutlined
            style={{ color: theme.primaryLight, fontSize: '1.15rem' }}
          />
        }
        suffix={
          <SearchOutlined
            style={{ color: theme.primaryLight, fontSize: '1.15rem' }}
          />
        }
        style={{ borderRadius: 30, height: 50, background: 'unset' }}
        bordered={true}
      />
    </AutoComplete>
  );
}
// outline: `3px solid ${theme.primaryLight}`
export default SearchBar;
