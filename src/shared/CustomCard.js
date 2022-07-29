import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = ({title, description, cover, avatar, isShowMeta, isFavourite, actions, ...props }) => {
    return (
        <Card {...props} {...{cover, actions}} style={{ width: 300 }}>
            {isShowMeta ? <Meta {...{title, description, avatar}}/> : null}
        </Card>
    )
}

export default CustomCard