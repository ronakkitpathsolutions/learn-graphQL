import React from 'react'
import { Input, Radio, Switch } from 'antd'

const CustomInput = ({type, isDisabled, handleChange, isLoading, isSolid, text, ...props}) => {
  switch (type) {
    case 'input':
        return <Input onChange={handleChange} disabled={isDisabled} {...props} />
    case 'radio':
        return  isSolid ? <Radio.Button onChange={handleChange} {...props} >{text}</Radio.Button> : 
        <Radio onChange={handleChange} {...props} >{text}</Radio>
    case 'switch':
        return <Switch  onChange={handleChange} loading={isLoading} {...props} />
    default: return null
  }
}

export default CustomInput