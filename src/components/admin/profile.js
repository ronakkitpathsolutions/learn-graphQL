import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_PARTICULAR_USER } from '../../graphql/apollo/queries'

const useProfile = () => {
  const { id } = useParams()
  const { error, data, loading } = useQuery(GET_PARTICULAR_USER, { variables: {id: String(id)}})
  return [{ error, data, loading }, id]
}

export default useProfile