import React from 'react'
import { Col, Row } from 'antd'
import { EditOutlined, MessageOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import usePosts from '../../components/admin/posts'
import CustomCard from '../../shared/CustomCard'
import CustomSkeleton from '../../shared/CustomSkeleton'
import Error404 from '../../shared/Error404'
import useHistory from '../../hooks/useHistory';
import CustomBadge from '../../shared/CustomBadge';

const Posts = ({ ...props }) => {
  const [{ data, loading, error }, usersData, handleFavourite] = usePosts()
  const [handleRedirect] = useHistory()

  if (error) return <Error404 />
  if (loading) return <CustomSkeleton looped={16} isLoaded={loading} mainClassName="main-skeleton" className='default-margin' type="card" />

  return (
    <div className='default-margin'>
      <Row align="middle" justify='start' >
        <Col className="mb-2"  >
          
        </Col>
      </Row>
      <Row {...props} justify="space-evenly" align="middle" >
        {
          data['posts']?.data?.map((value) => {
            return (
              <Col key={value?.id} className="mb-2" >
                <CustomCard width={400} key={value?.id}
                  isShowMeta
                  cover={<img alt={value?.title} src={`https://picsum.photos/seed/${value?.id}/300/200`} />}

                  title={value?.title}
                  actions={[
                    <div onClick={() => handleFavourite(value?.title)} >{!usersData?.favourite_posts?.[value?.title] ? <HeartTwoTone className='font-size-25' twoToneColor="#eb2f96" key="heart" /> :
                      <HeartFilled className='font-size-25' style={{ color: "#eb2f96" }} key="heart" />}
                    </div>,
                    <EditOutlined className="font-size-25" style={{ color: "#84f542" }} key="edit" />,
                    <div onClick={() => handleRedirect(`/posts/${value?.id}/comments`)} >
                      <CustomBadge type='count' count={value?.comments?.data?.length} >
                        <MessageOutlined className='font-size-25' style={{ color: "#42a1f5" }} key="ellipsis" />
                      </CustomBadge>
                    </div>
                  ]}
                  description={value?.body} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Posts