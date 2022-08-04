import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from "../../graphql/apollo/queries";
import { allFavouriteUsers } from "../../redux/actions/actions";

const useUsers = () => {
    const { error, data, loading, refetch } = useQuery(GET_ALL_USERS, { variables: ""})
    const favoutite_users = useSelector(({usersMetaData}) => usersMetaData?.favoutite_users)
    const dispatch = useDispatch()

    const handleFavourite = (name) => {
        console.log('name', name)
        dispatch(allFavouriteUsers({...favoutite_users, [name]: !favoutite_users[name]}))
    }

    const handleSearch = (value) => {
        refetch({ search: String(value) })
    }

    console.log('error', error)

  return [handleFavourite, favoutite_users, handleSearch, { error, data, loading }]
}

export default useUsers