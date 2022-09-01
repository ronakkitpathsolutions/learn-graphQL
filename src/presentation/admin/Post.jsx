import React from 'react'
import { Col, Form, Row } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import usePost from '../../components/admin/post'
import CustomCollapse from '../../shared/CustomCollapse'
import CustomSkeleton from '../../shared/CustomSkeleton'
import Error404 from '../../shared/Error404'
import CustomForm from '../../shared/CustomForm';
import CustomInput from '../../shared/CustomInput';

const Post = ({...props}) => {
  const [{ error, loading, profileData }, handleEditComment, formData] = usePost()

  if (error) return <Error404 />
  if (loading) return <CustomSkeleton  looped={1} isLoaded={loading} mainClassName="main-skeleton" className='default-margin' type="paragraph_avatar" rows={4} />

  const editCommentIcon = (commentId) => <EditOutlined  onClick={(e) => handleEditComment(e,commentId)} className='font-size-25' style={{ color: "#faad14" }} key="ellipsis" />

  return (
    <div className='default-margin' {...props} >
        <Row align='start' justify='start' >
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="mx-1 my-1" >
              <h2>Comments</h2>
              <CustomCollapse extraElement={editCommentIcon} collapseData={profileData?.comments?.map((data) => { return {header: data?.name, text: data?.body, ...data}})} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="mx-1 my-1" >
              <h2>Add Comment</h2>
              <CustomForm>
                {
                  formData?.map((data, index) => {
                    return (
                      <div key={index} >
                        <label>{data?.label}</label>
                        <Form.Item>
                          <CustomInput {...data} />
                        </Form.Item>
                        
                      </div>
                    )
                  })
                }
              </CustomForm>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Post