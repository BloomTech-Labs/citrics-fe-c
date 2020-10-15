import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../../styles/style.less';
import { useSelector } from 'react-redux';

const { Content, Sider } = Layout;

export default ({ Components, styles }) => {
  const theme = useSelector(state => state.theme);
  //ant design is making me lose my mind this width const is temporary
  const width = 576;
  return (
    <Sider
      width={width.toString()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primary,
        color: theme.bg,
        minHeight: '100vh',
        maxHeight: '100vh',
        top: 0,
        position: 'fixed',
        width: '100vw',
        zIndex: 99,
        overflowY: 'scroll',
      }}
    >
      <div
        style={{
          padding: '24px',
          paddingTop: '104px',
          width: width - 32,
          display: 'inline-block',
          justifyContent: 'center',
          minHeight: '100vh',
          maxHeight: '100vh',
        }}
      >
        {Array.isArray(Components) ? (
          Components.map(Component => <Component />)
        ) : (
          <Components />
        )}
      </div>
    </Sider>
  );
};
