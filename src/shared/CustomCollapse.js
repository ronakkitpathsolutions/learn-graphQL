import React from 'react'
import { Collapse } from 'antd'
const { Panel } = Collapse;

const CustomCollapse = ({expandIconPosition, collapseData, extraElement, ...props}) => {
  return (
    <div {...props}>
        <Collapse {...props} {...{expandIconPosition}} >
            {
                collapseData?.map((value, index) => {
                    return(
                        <Panel header={value?.header} key={String(index+1)} extra={extraElement(index)} >
                            <div>
                                {value?.email ? <p className='text-bold-600'>{value?.email}</p> : null}
                                {value?.text}
                            </div>
                        </Panel>
                    )
                })
            }
        </Collapse>
    </div>
  )
}

export default CustomCollapse