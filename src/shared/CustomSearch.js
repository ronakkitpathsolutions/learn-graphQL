import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const CustomSearch = ({allowClear, handleSearch, ...props }) => {
    return (
        <div {...props} >
            <Search {...{allowClear}} {...props} onSearch={handleSearch} />
        </div>
    )
}

export default CustomSearch