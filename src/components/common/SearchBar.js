import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';

import '../../styles/style.less';

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

  return (
    <div className="search-container">
      <AutoComplete
        options={names}
        style={{ width: '100%' }}
        onSelect={onSelect}
        onChange={onChange}
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
