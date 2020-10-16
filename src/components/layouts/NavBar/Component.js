import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
//import '../../../styles/style.less';
import { useSelector } from 'react-redux';
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { styles } from './styles';

const { Header } = Layout;

export default ({ display }) => {
  const history = useHistory();
  //styling
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);
  console.log(sty);
  return (
    <Header style={sty.header}>
      <div
        className="logo"
        key="logo"
        onClick={() => history.push('./')}
        style={sty.logo}
      >
        Citrics
      </div>
      <Menu mode="horizontal" style={sty.menu}>
        {/*
          Tried to make this a seperate component then .mapped through an arr of objects 
          Ant design's <Menu mode='horizontal'/> did not want to play nice with that so here we are.. */}

        <Menu.Item
          key="favorites"
          style={sty.menuItem}
          icon={<HeartOutlined style={sty.menuIcon} />}
          onClick={() => history.push('./profile')}
        />
        {sty.homeIcon && (
          <Menu.Item
            key="home"
            style={sty.menuItem}
            icon={<HomeOutlined style={sty.menuIcon} />}
            onClick={() => history.push('./profile')}
          />
        )}
        <Menu.Item
          key="profile"
          style={sty.menuItem}
          icon={<UserOutlined style={sty.menuIcon} />}
          onClick={() => history.push('./profile')}
        />
      </Menu>
    </Header>
  );
};
