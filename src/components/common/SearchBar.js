import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarActs } from '../../state/actions';
import '../../styles/style.less';

function SearchBar() {
  const dispatch = useDispatch();
  const { filter, cityData, loading, error } = useSelector(
    state => state.searchBar
  );
  const { fetchCities, filterCities } = searchBarActs;

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const onChange = value => dispatch(filterCities(value));
  // you can pass the object id to global state from here
  const onSelect = (value, obj) => console.log(obj.id);

  return (
    <div className="search-container">
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
          prefix={<LeftOutlined />}
          suffix={<SearchOutlined />}
        />
      </AutoComplete>
    </div>
  );
}

export default SearchBar;
