import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const CustomSearch = ({allowClear, handleSearch, handleSearchByPress, ...props }) => {
    return (
        <div {...props} >
            <Search {...{allowClear}} {...props} onPressEnter={handleSearchByPress} onSearch={handleSearch} />
        </div>
    )
}

export default CustomSearch