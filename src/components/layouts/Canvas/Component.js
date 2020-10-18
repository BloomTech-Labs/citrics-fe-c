import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../../styles/style.less';
import NavBar from '../NavBar';
import Body from '../Body';
const { Content } = Layout;

// The Canvas component is the blueprint for what is draw to the DOM
// It renders the navbar by default but if you want to render other components use the 'main' and 'side' props
// If 'side' props are provided they will be displayed in the sidebar to the far left of the browser. (WARNING! 'main' props must be provided for 'side' props to be rendered)
// 'main' props will be displayed to the right or centered underneath the nav bar if their are no 'side' props

export default ({ Main, Side, styles }) => (
  <Layout
    className="layout"
    style={{
      background:
        "linear-gradient(rgba(17, 26, 34, .95), rgba(20, 30, 34, .95)), url('https://i.imgur.com/4VVllkI.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      opacity: 1,
      minHeight: '100vh',
    }}
  >
    <Content style={{ minHeight: '100vh' }}>
      <NavBar />
      <Body
        Main={Main ? Main : false}
        Side={Side ? Side : false}
        style={{
          minHeight: '100%',
          display: 'inline-block',
        }}
      />
    </Content>
  </Layout>
);
