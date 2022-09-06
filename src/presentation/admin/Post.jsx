import React from 'react'
import { Col, Form, Row } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import usePost from '../../components/admin/post'
import CustomCollapse from '../../shared/CustomCollapse'
import CustomSkeleton from '../../shared/CustomSkeleton'
import Error404 from '../../shared/Error404'
import CustomForm from '../../shared/CustomForm';
import CustomInput from '../../shared/CustomInput';
import CustomButton from '../../shared/CustomButton';
import CustomModal from '../../shared/CustomModal';

const Post = ({ ...props }) => {
  const [{ error, loading, profileData }, handleEditComment, formData, handleSubmit, { commentLoading }, isOpenModal, handleCancel, handleDeleteComment] = usePost()

  if (error) return <Error404 />
  if (loading) return <CustomSkeleton looped={1} isLoaded={loading} mainClassName="main-skeleton" className='default-margin' type="paragraph_avatar" rows={4} />

  const editCommentIcon = (commentId) => {
    return (
      <div>
        <EditOutlined onClick={(e) => handleEditComment(e, commentId)} className='font-size-25' style={{ color: "#faad14" }} key="ellipsis" />
        <DeleteOutlined onClick={(e) => handleDeleteComment(e, commentId)} className='font-size-25 ml-1' style={{ color: "#f52222" }} key="delete" />
      </div>
    )
  }

  const confirmFooter = () => [<div className='custom_footer'>
    <CustomButton className='mx-2' key='submit' danger htmlType="button" type="primary" data='Delete' />
    <CustomButton key='back' handleClick={() => handleCancel('isDelete')} htmlType="button" type="primary" data='Cancel' />
  </div>
  ]

  return (
    <div className='default-margin' {...props} >
      <Row align='start' justify='start' >
        <Col xs={24} sm={24} md={16} lg={18} xl={12}>
          <div className="mx-1 my-1" >
            <h2>Comments</h2>
            <CustomCollapse extraElement={editCommentIcon} collapseData={profileData?.comments?.map((data) => { return { header: data?.name, text: data?.body, ...data } })} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="mx-1 my-1" >
            <CustomModal {...{ handleCancel, name: 'isEdit', maskClosable: false, isOpen: isOpenModal['isEdit'] }} customFooter={null} centered title="Edit Comment" >
              <CustomForm handleSubmit={(e) => handleSubmit(e)} >
                {
                  formData?.map(({ isError, label, errorMessage, ...data }, index) => {
                    return (
                      <div key={index} >
                        <label>{label}</label>
                        <Form.Item rules={[{ required: isError }]} >
                          <CustomInput {...data} />
                          <span className='color-red'>{errorMessage}</span>
                        </Form.Item>
                      </div>
                    )
                  })
                }
                <CustomButton loading={commentLoading} htmlType="submit" type="primary" data='Submit' />
              </CustomForm>
            </CustomModal>
            <CustomModal {...{ handleCancel, name: 'isDelete', maskClosable: false, isOpen: isOpenModal['isDelete'] }} customFooter={confirmFooter()} centered>
              <div>
                <h3>Are you sure?</h3>
              </div>
            </CustomModal>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Post