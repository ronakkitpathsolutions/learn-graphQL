import React from 'react'
import { Skeleton, Space } from 'antd';

const CustomSkeleton = ({ type, looped, mainClassName, isLoaded, rows, ...props }) => {
    switch (type) {
        case 'card':
            return <div className={mainClassName}>
                {
                    Array.from({ length: looped || 1 }, (v, i) => i).map(data =>
                        <div {...props}  key={data}>
                            <Space>
                                <Skeleton.Image active={isLoaded} />
                            </Space>
                            <br />
                            <br />
                            <Space>
                                <Skeleton.Button active={isLoaded} />
                                <Skeleton.Avatar active={isLoaded} />
                                <Skeleton.Input active={isLoaded} />
                            </Space>
                            <br />
                            <br />
                            <Space>
                                <Skeleton.Input active={isLoaded} />
                            </Space>
                        </div>
                    )
                }
            </div>
        case 'paragraph_avatar':
            return <div className={mainClassName}>
                {
                    Array.from({ length: looped || 1 }, (v, i) => i).map(data =>
                        <div {...props}  key={data}>
                            <Skeleton avatar paragraph={{ rows }}/>
                        </div>
                    )
                }
            </div>
        default: return null
    }
}

export default CustomSkeleton