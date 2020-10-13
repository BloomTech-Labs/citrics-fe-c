import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../styles/style.less';
import Sidebar from './SideBar';

const { Content } = Layout;

export default ({ Main, Side }) => {
  return Side && Main ? (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Sidebar Components={Side} />
      <Content
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          width: '100vw',
        }}
      >
        <div
          style={{
            height: 'calc(100vh)',
            width: 'calc(100vw - 576px)',
            marginLeft: 'calc(100vw - 100% + 558px)', // had to do this funky stuff cuz the scroll bar
            paddingTop: '80px',
            paddingRight: '24px',
            paddingLeft: '24px',
          }}
        >
          {Array.isArray(Main) ? (
            Main.map(Component => <Component />)
          ) : (
            <Main />
          )}
        </div>
      </Content>
    </div>
  ) : (
    <Content
      style={{
        padding: 48,
        paddingBottom: 0,
        paddingTop: 0,
      }}
    >
      {Array.isArray(Main) ? Main.map(Component => <Component />) : <Main />}
    </Content>
  );
};
