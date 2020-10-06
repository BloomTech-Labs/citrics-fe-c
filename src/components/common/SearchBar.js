import React, { useState } from 'react';
import { AutoComplete, Input, Tooltip } from 'antd';
import { AudioOutlined, LeftOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

function SearchBar() {
  const [names, setNames] = useState([
    { value: 'jamie' },
    { value: 'santa' },
    { value: 'batman' },
  ]);
  const [value, setValue] = useState();

  const onSelect = value => {
    console.log('onSelect', value);
  };

  const onChange = data => {
    setValue(data);
  };

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
    <AutoComplete
      options={names}
      onSelect={onSelect}
      onChange={onChange}
      // onSearch={onSearch}
      dropdownMatchSelectWidth={true}
    >
      <Input
        placeholder="Search"
        style={{
          height: 50,
          borderRadius: '30px',
          filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))',
        }}
        prefix={<LeftOutlined />}
        suffix={<SearchOutlined />}
      />
    </AutoComplete>
  );
}

export default SearchBar;
