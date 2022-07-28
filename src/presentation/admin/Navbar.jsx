import React, { Fragment, memo } from 'react'
import { Layout, Menu } from 'antd';
import useNavbar from '../../components/admin/navbar'
import useHistory from '../../hooks/useHistory';
const { Sider } = Layout;

const Navbar = ({ collapsed, ...props }) => {
  const [items, defaultSelectedKeys] = useNavbar()
  const [handleRedirect] = useHistory()
  return (
    <Fragment {...props} >
      <Sider trigger={null} collapsible {...{ collapsed }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" {...{ defaultSelectedKeys }}>
          {
            items?.map((value) => {
              return (
                <Menu.Item onClick={() => handleRedirect(value?.path)} key={value?.key} >
                  {value?.icon}
                  <span>{value?.label}</span>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    </Fragment>

  )
}

export default memo(Navbar)