import React from 'react'
import { Avatar, Col, Row } from 'antd'
import { EditOutlined, EllipsisOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import Error404 from '../../shared/Error404'
import CustomCard from '../../shared/CustomCard'
import useUsers from '../../components/admin/users';
import CustomSearch from '../../shared/CustomSearch';
import useHistory from '../../hooks/useHistory';
import CustomSkeleton from '../../shared/CustomSkeleton';

const Users = ({ ...props }) => {


  const [handleFavourite, usersData, handleSearch, { error, data, loading }] = useUsers()
  const [handleRedirect] = useHistory()

  if (error) return <Error404 />
  if (loading) return <CustomSkeleton  looped={12} isLoaded={loading} mainClassName="main-skeleton" className='default-margin' type="card" />

  return (
    <div className='default-margin'>
      <Row align="middle" justify='start' >
        <Col className="mb-2"  >
          <CustomSearch {...{ handleSearch }} allowClear enterbutton="Search" size="large" placeholder="Search users" />
        </Col>
      </Row>
      <Row {...props} justify="space-evenly" align="middle" >
        {
          data['users']?.data?.map((users) => {
            return (
              <Col key={users?.id} className="mb-2" >
                <CustomCard width={300} key={users?.id}
                  isShowMeta
                  cover={<img alt={users?.username} src={`https://picsum.photos/seed/${users?.username}/300/200`} />}
                  avatar={<Avatar alt={users?.username} src={`https://joeschmoe.io/api/v1/:${users?.id}`} />}
                  title={users?.name}
                  actions={[
                    <div onClick={() => handleFavourite(users?.username)} >{!usersData?.favoutite_users?.[users?.username] ? <HeartTwoTone className='font-size-25' twoToneColor="#eb2f96" key="heart" /> :
                      <HeartFilled className='font-size-25' style={{ color: "#eb2f96" }} key="heart" />}
                    </div>,
                    <EditOutlined className="font-size-25" style={{ color: "#84f542" }} key="edit" />,
                    <EllipsisOutlined onClick={() => handleRedirect(`/profiles/${users?.id}`)} className='font-size-25' style={{ color: "#42a1f5" }} key="ellipsis" />,
                  ]}
                  description={users?.website} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Users