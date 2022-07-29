import React, { Fragment } from 'react'
import { Avatar, Col, Row } from 'antd'
import { EditOutlined, EllipsisOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import Error404 from '../../shared/Error404'
import CustomCard from '../../shared/CustomCard'
import useUsers from '../../components/admin/users';
import CustomSearch from '../../shared/CustomSearch';

const Users = ({ ...props }) => {


  const [handleFavourite, favoutite_users, handleSearch, { error, data, loading }] = useUsers()

  if (error) return <Error404 />
  if (loading) return <h1>Loading...</h1>

  console.log('data', data['users']?.data, favoutite_users)

  return (
    <Fragment>
      <Row align="middle" justify='start' >
        <Col className="mb-2"  >
          <CustomSearch {...{ handleSearch }} allowClear enterButton="Search" size="large" placeholder="Search users" />
        </Col>
      </Row>
      <Row {...props} justify="space-evenly" align="middle" >
        {
          data['users']?.data?.map((users, index) => {
            return (
              <Col className="mb-2" >
                <CustomCard key={users?.id}
                  isShowMeta
                  cover={<img alt={users?.username} src={`https://placeimg.com/640/480/${users?.username}`} />}
                  avatar={<Avatar alt={users?.username} src={`https://joeschmoe.io/api/v1/:${users?.id}`} />}
                  title={users?.name}
                  actions={[
                    <div onClick={() => handleFavourite(index + 1)} >{!favoutite_users?.[index + 1] ? <HeartTwoTone className='font-size-25' twoToneColor="#eb2f96" key="heart" /> :
                      <HeartFilled className='font-size-25' style={{ color: "#eb2f96" }} key="heart" />}
                    </div>,
                    <EditOutlined className="font-size-25" style={{ color: "#84f542" }} key="edit" />,
                    <EllipsisOutlined className='font-size-25' style={{ color: "#42a1f5" }} key="ellipsis" />,
                  ]}
                  description={users?.website} />
              </Col>
            )
          })
        }
      </Row>
    </Fragment>
  )
}

export default Users