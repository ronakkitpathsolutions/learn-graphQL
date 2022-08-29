import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from "../../graphql/apollo/queries";
import { allFavouriteUsers } from "../../redux/actions/actions";

const useUsers = () => {
    const { error, data, loading, refetch } = useQuery(GET_ALL_USERS, { variables: ""})
    const usersData = useSelector(({usersMetaData}) => usersMetaData)
    const dispatch = useDispatch()

    const handleFavourite = (name) => {
        dispatch(allFavouriteUsers({...usersData?.favoutite_users, [name]: !usersData?.favoutite_users[name]}))
    }

    const handleSearch = (value) => {
        refetch({ search: String(value) })
    }

    const handleSearchByPress = ({target}) => {
        refetch({ search: String(target?.value) })
    }
    
  return [handleFavourite, usersData, handleSearch, { error, data, loading }, handleSearchByPress]
}

export default useUsers