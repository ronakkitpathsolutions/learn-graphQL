import React from 'react'
import { Badge } from 'antd'

const CustomBadge = ({children, type, count, overflowCount, text, color, ...props}) => {
  switch (type) {
    case 'dot': return <Badge dot {...props} >{children}</Badge>
    case 'count': return <Badge {...{count, overflowCount, color}} >{children}</Badge>
    case 'ribbon': return <Badge.Ribbon {...{text, color}} >{children}</Badge.Ribbon>
    default: return null;
  }
}

export default CustomBadge