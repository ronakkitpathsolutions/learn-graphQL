import React from 'react'
import { Button } from 'antd'

const CustomButton = ({ data, type, handleClick, ...props }) => {
  return (
    <div>
        <Button onClick={handleClick} {...props} type={ type || "primary"}>{data}</Button>
    </div>
  )
}

export default CustomButton