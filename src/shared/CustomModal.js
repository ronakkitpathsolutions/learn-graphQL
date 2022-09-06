import React from 'react'
import { Modal } from 'antd'

const CustomModal = ({ name, children, customFooter, title, isOpen, handleOk, handleCancel, ...props }) => {
      return <div>
        <Modal footer={customFooter} {...props} open={isOpen} title={title? title : ""} onOk={handleOk} onCancel={() => handleCancel(name)}>
          {children}
        </Modal>
      </div>

}

export default CustomModal