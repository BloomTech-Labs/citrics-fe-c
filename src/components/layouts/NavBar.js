import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import '../../styles/style.less';
import { useSelector } from 'react-redux';
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

export default () => {
  const theme = useSelector(state => state.theme);
  const history = useHistory();

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
        onClick={() => history.push('./landing')}
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
        {/*
          Tried to make this a seperate component then .mapped through an arr of objects 
          Ant design's <Menu mode='horizontal'/> did not want to play nice with that so here we are.. */}

        {/*
          This component is not zombie code, it will need to be displayed at mobile breakpoints 
          <Menu.Item
          key="home"
          icon={<HomeOutlined style={{ display: 'none' }} />}
          onClick={() => history.push('./landing')}
          /> */}

        <Menu.Item
          key="favorites"
          icon={<HeartOutlined style={{ color: theme.primary }} />}
          onClick={() => history.push('./landing')}
        />
        <Menu.Item
          key="profile"
          icon={<UserOutlined style={{ color: theme.primary }} />}
          onClick={() => history.push('./landing')}
        />
      </Menu>
    </Header>
  );
};
