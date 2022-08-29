import React from 'react'
import { Col, Row } from 'antd'
import { EditOutlined, MessageOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import usePosts from '../../components/admin/posts'
import CustomCard from '../../shared/CustomCard'
import CustomSkeleton from '../../shared/CustomSkeleton'
import Error404 from '../../shared/Error404'
import useHistory from '../../hooks/useHistory';
import CustomBadge from '../../shared/CustomBadge';
import CustomSearch from '../../shared/CustomSearch';
import CustomPagination from '../../shared/CustomPagination';

const Posts = ({ ...props }) => {
  const [{ data, loading, error }, usersData, handleFavourite, handleSearch, handleSearchByPress, handleCurrentPage, paginationData] = usePosts()
  const [handleRedirect] = useHistory()

  if (error) return <Error404 />
  if (loading) return <CustomSkeleton looped={16} isLoaded={loading} mainClassName="main-skeleton" className='default-margin' type="card" />

  return (
    <div className=''>
      <div className='filter-posts' >
        <Row align="middle" justify='start' >
          <Col className="mb-2"  >
            <CustomSearch {...{ handleSearch, handleSearchByPress }} allowClear enterButton="Search" size="large" placeholder="Search users" />
          </Col>
        </Row>
      </div>
      <div className='posts-component' >
        <Row  {...props} justify="start" align="start" >
          {
            data['posts']?.data?.map((value) => {
              return (
                <Col key={value?.id} className="mx-2 my-2" xs={21} sm={22} md={10} lg={10} xl={5}>
                  <CustomCard  key={value?.id}
                    isShowMeta
                    cover={<img alt={value?.title} src={`https://picsum.photos/seed/${value?.id}/200/150`} />}

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
        <div>
          <CustomPagination {...{handleCurrentPage, paginationData}} />
        </div>
      </div>
    </div>
  )
}

export default Posts