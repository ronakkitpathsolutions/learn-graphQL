import { Space, Spin } from 'antd'
import React from 'react'

const CustomLoader = ({ ...props }) => {
    return (
        <div {...props} >
            <Space size="middle">
                <Spin {...props} size="large" />
            </Space>
        </div>
    )
}

export default CustomLoader