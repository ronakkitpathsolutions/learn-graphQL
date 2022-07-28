import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Navbar from '../admin/Navbar';
import { Route, Routes } from 'react-router-dom';
const { Header, Content } = Layout;

const Dashboard = ({routes, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout {...props} >
      <Navbar {...{ collapsed }} />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger custom-toggle',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24
          }}
        >
          <Routes>
            {
              routes.map((data, id) => <Route key={id} {...data} />)
            }
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;