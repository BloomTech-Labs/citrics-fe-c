import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import '../../styles/style.less';
import { useSelector } from 'react-redux';
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default () => {
  const theme = useSelector(state => state.theme);
  return (
    <Header
      style={{
        display: 'flex',
        height: '80px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.bg,
        top: 0,
        position: 'fixed',
        width: '100vw',
        zIndex: 100,
      }}
    >
      <div
        className="logo"
        key="logo"
        style={{
          color: theme.primary,
          backgroundColor: theme.bg,
          fontSize: '32px',
          lineHeight: '32px',
        }}
      >
        Citrics
      </div>
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: theme.bg,
          color: theme.primary,
        }}
      >
        <Menu.Item
          key="home"
          icon={<HomeOutlined style={{ color: theme.primary }} />}
        />
        <Menu.Item
          key="favorites"
          icon={<HeartOutlined style={{ color: theme.primary }} />}
        />
        <Menu.Item
          key="profile"
          icon={<UserOutlined style={{ color: theme.primary }} />}
        />
      </Menu>
    </Header>
  );
};
