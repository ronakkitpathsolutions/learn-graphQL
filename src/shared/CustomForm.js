import { Form } from 'antd'
import React from 'react'

const CustomForm = ({children, handleSubmit, ...props}) => {
  return (
    <div {...props} >
        <Form onFinish={handleSubmit} onFinishFailed={handleSubmit} > {children} </Form>
    </div>
  )
}

export default CustomForm