import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Navbar from '../admin/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Error404 from '../../shared/Error404';
import useToggle from '../../hooks/useToggle';
const { Header, Content } = Layout;

const Dashboard = ({routes, ...props }) => {
  const location = useLocation();
  const [toggle, setToggle] = useToggle(false);

  console.log('location', location)

  return (
    <Layout {...props} >
      <Navbar {...{ collapsed: toggle }} />
      <Layout className="site-layout">
        <Header
          className="site-layout-background custom-header"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(toggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger custom-toggle',
            onClick: () => setToggle(!toggle),
          })}
        </Header>
        <Content
          className="site-layout-background overflow-auto main-component"
          style={{ margin: '24px 16px' }}>
          <Routes>
            {
              routes.map((data, id) => <Route {...{meta: data}} element={data?.element} key={id} {...data} />)
            }
            <Route path='*' element={<Error404/>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;