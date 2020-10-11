import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
import history from 'react-router-dom';

function NavBar() {
  const [current, setCurrent] = useState();
  const { SubMenu } = Menu;

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  /*
  useEffect(() => {
    window.onpopstate = e => {
      e.preventDefault()
      history.push(e.target.location.pathname)
    }
  }, []);
  */
  return (
    <div className="navbar-container">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu
          style={{ float: 'right' }}
          key="profile"
          icon={<UserOutlined style={{ color: 'white' }} />}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item
          style={{ float: 'right' }}
          key="home"
          icon={<HeartOutlined style={{ color: 'white' }} />}
        />
        <Menu.Item
          style={{ float: 'right' }}
          key="favorites"
          icon={<HomeOutlined style={{ color: 'white' }} />}
        />
        <Menu.Item
          style={{
            color: '#4AC85D',
            paddingBottom: '5px',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '32px',
            lineHeight: '32px',
          }}
          key="logo"
        >
          {' '}
          Citrics{' '}
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
