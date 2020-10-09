import React, { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';

function NavBar() {
  const [current, setCurrent] = useState();
  const { SubMenu } = Menu;

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

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
      </Menu>
    </div>
  );
}

export default NavBar;
