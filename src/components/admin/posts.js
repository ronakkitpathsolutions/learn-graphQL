import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_POSTS } from '../../graphql/apollo/queries'
import { allFavouritePosts } from '../../redux/actions/actions'

const usePosts = () => {
    const dispatch = useDispatch()
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        pageSize: 10
    })
    const {data, loading, error, refetch} = useQuery(GET_ALL_POSTS, { variables: {
        field: "",
        page: paginationData?.currentPage,
        pageSize: paginationData?.pageSize,
        search: ""
    } })
    const usersData = useSelector(({usersMetaData}) => usersMetaData)

    const handleFavourite = (title) => {
        dispatch(allFavouritePosts({...usersData?.favourite_posts, [title]: !usersData?.favourite_posts[title]}))
    }

    const handleSearch = (value) => {
        refetch({ search: String(value), page: 1 })
    }

    const handleSearchByPress = ({target}) => {
        refetch({ search: String(target?.value), page: 1 })
    }

    const handleCurrentPage = (page, pageSize) => {
        setPaginationData({
            ...paginationData, currentPage: page, pageSize
        })
        refetch({ page, pageSize })
    }

    return [{data, loading, error}, usersData, handleFavourite, handleSearch, handleSearchByPress, handleCurrentPage, paginationData]
}

export default usePosts