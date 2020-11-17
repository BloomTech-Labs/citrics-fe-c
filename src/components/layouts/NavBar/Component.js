import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
import { useSelector } from 'react-redux';
import {
  HomeOutlined,
  UserOutlined,
  HeartOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import styles from './styles';
const { Header } = Layout;

export default ({ display }) => {
  const history = useHistory();
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('okta-token-storage');
    if (token != null) {
      setUserInfo(token);
    } else {
      setUserInfo(null);
    }
  }, []);

  return (
    <Header style={sty.header}>
      <div
        className="logo"
        key="logo"
        onClick={() => history.push('./')}
        style={sty.logo}
      >
        <img
          style={sty.logo}
          src={require('../../../styles/logo/lime.png')}
          alt="Citrics Lime Logo"
        />
        Citrics
      </div>
      <Menu mode="horizontal" style={sty.menu}>
        {/*
          Tried to make this a seperate component then .mapped through an arr of objects 
          Ant design's <Menu mode='horizontal'/> did not want to play nice with that so here we are.. */}
        {sty.homeIcon && (
          <Menu.Item
            key="home"
            style={sty.menuItem}
            icon={<HomeOutlined style={sty.menuIcon} />}
            onClick={() => history.push('./')}
          />
        )}
        {userInfo && (
          <Menu.Item
            key="favorites"
            style={sty.menuItem}
            icon={<HeartOutlined style={sty.menuIcon} />}
            onClick={() => history.push('./favorites')}
          />
        )}

        {userInfo && (
          <Menu.Item
            key="home"
            style={sty.menuItem}
            icon={<UserOutlined style={sty.menuIcon} />}
            onClick={() => history.push('./profile')}
          />
        )}

        {!userInfo && (
          <Menu.Item
            key="Login"
            icon={
              <Button
                style={{
                  background: 'smoke',
                  color: '#4D194D',
                  marginRight: '0.5rem',
                }}
                shape="round"
                icon={<LoginOutlined />}
              >
                Login
              </Button>
            }
            onClick={() => history.push('./login')}
          />
        )}
      </Menu>
    </Header>
  );
};
