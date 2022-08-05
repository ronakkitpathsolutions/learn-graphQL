import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = ({children, title, headertitle, description, cover, avatar, isShowMeta, isFavourite, actions, width, ...props }) => {
    return (
        <Card {...props} {...{cover, actions, title: headertitle}} style={{ width: width }}>
            {isShowMeta ? <Meta {...{title, description, avatar}}/> : children}
        </Card>
    )
}

export default CustomCard