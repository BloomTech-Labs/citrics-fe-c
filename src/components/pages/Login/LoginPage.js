import React from 'react';
import LoginContainer from './LoginContainer.js';
import { Layout } from 'antd';
import NavBar from '../../layouts/NavBar/Component.js';

function LoginPage() {
  return (
    <div>
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
        <NavBar />
        <LoginContainer />
      </Layout>
    </div>
  );
}

export default LoginPage;
