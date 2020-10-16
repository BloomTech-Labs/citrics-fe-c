import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../../styles/style.less';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar';
import styles from './styles';

const { Content } = Layout;

export default ({ Main, Side, display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);
  return Side && Main ? (
    display == 'desktop' ? (
      <div style={sty.split}>
        <Sidebar Components={Side} />
        <Content style={sty.rightContent}>
          <div style={sty.rightContentContainer}>
            {Array.isArray(Main) ? (
              Main.map(Component => <Component />)
            ) : (
              <Main />
            )}
          </div>
        </Content>
      </div>
    ) : (
      <Content style={sty.noSider}>
        <div className="noSiderContainer" style={sty.noSiderContainer}>
          {Array.isArray(Side) ? (
            Side.map(Component => <Component />)
          ) : (
            <Side />
          )}
          {Array.isArray(Main) ? (
            Main.map(Component => <Component />)
          ) : (
            <Main />
          )}
        </div>
      </Content>
    )
  ) : (
    <Content style={sty.noSider}>
      {Array.isArray(Main) ? Main.map(Component => <Component />) : <Main />}
    </Content>
  );
};
