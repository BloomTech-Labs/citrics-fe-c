import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../../styles/style.less';
import { useSelector } from 'react-redux';
import styles from './styles';

const { Content, Sider } = Layout;

export default ({ Components, display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <Sider width={sty.sider.width.toString()} style={sty.sider}>
      <div style={sty.siderContainer}>
        {Array.isArray(Components) ? (
          Components.map(Component => <Component />)
        ) : (
          <Components />
        )}
      </div>
    </Sider>
  );
};
