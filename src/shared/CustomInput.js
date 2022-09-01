import React from 'react'
import { Input, Radio, Switch } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

const CustomInput = ({type, rows, isDisabled, handleChange, isLoading, isSolid, text, ...props}) => {
  switch (type) {
    case 'input':
        return <Input onChange={handleChange} disabled={isDisabled} {...props} />
    case 'radio':
        return  isSolid ? <Radio.Button onChange={handleChange} {...props} >{text}</Radio.Button> : 
        <Radio onChange={handleChange} {...props} >{text}</Radio>
    case 'switch':
        return <Switch  onChange={handleChange} loading={isLoading} {...props} />
    case 'textarea':
        return <TextArea onChange={handleChange} loading={isLoading} {...props} {...{rows}} />
    default: return null
  }
}

export default CustomInput