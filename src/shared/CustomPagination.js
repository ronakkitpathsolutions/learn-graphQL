import { Pagination } from 'antd'

const CustomPagination = ({handleCurrentPage, paginationData, ...props}) => {

    return (
        <div {...props} >
            <Pagination {...props} current={paginationData?.currentPage || 1} 
                onChange={handleCurrentPage} 
                pageSize={paginationData?.pageSize || 10}
                showSizeChanger
                total={100}
                 />
        </div>
    )
}

export default CustomPagination