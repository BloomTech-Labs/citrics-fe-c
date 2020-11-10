import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
import { useSelector } from 'react-redux';
import { HomeOutlined, HeartOutlined, LoginOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from './styles';
import { useOktaAuth } from '@okta/okta-react';
const { Header } = Layout;

export default ({ display }) => {
  const history = useHistory();
  //styling
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <Header style={sty.header}>
      <div
        className="logo"
        key="logo"
        onClick={() => history.push('./')}
        style={sty.logo}
      >
        <img
          style={{
            height: '7.5vh',
            marginRight: '0.5rem',
            paddingBottom: '0.5rem',
          }}
          src={require('../../../styles/logo/lime.png')}
          alt="Citrics Lime Logo"
        />
        Citrics
      </div>
      <Menu mode="horizontal" style={sty.menu}>
        {/*
          Tried to make this a seperate component then .mapped through an arr of objects 
          Ant design's <Menu mode='horizontal'/> did not want to play nice with that so here we are.. */}

        {/* <Menu.Item
          key="favorites"
          style={sty.menuItem}
          icon={<HeartOutlined style={sty.menuIcon} />}
          onClick={() => history.push('./favorites')}
        /> */}
        {sty.homeIcon && (
          <Menu.Item
            key="home"
            style={sty.menuItem}
            icon={<HomeOutlined style={sty.menuIcon} />}
            onClick={() => history.push('./protected')}
          />
        )}
        {/* <Menu.Item
          key="home"
          style={sty.menuItem}
          icon={<UserOutlined style={sty.menuIcon} />}
          onClick={() => history.push('./profile')}
        /> */}

        <Menu.Item
          key="Login"
          icon={
            <Button
              style={{ background: 'smoke', color: '#4D194D' }}
              shape="round"
              icon={<LoginOutlined />}
            >
              Login
            </Button>
          }
          onClick={() => history.push('./login')}
        />
      </Menu>
    </Header>
  );
};
