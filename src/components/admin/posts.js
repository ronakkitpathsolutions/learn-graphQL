import { useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_POSTS } from '../../graphql/apollo/queries'
import { allFavouritePosts } from '../../redux/actions/actions'

const usePosts = () => {
    const dispatch = useDispatch()
    const {data, loading, error} = useQuery(GET_ALL_POSTS)
    const usersData = useSelector(({usersMetaData}) => usersMetaData)

    const handleFavourite = (title) => {
        dispatch(allFavouritePosts({...usersData?.favourite_posts, [title]: !usersData?.favourite_posts[title]}))
    }

    return [{data, loading, error}, usersData, handleFavourite]
}

export default usePosts