import { useQuery } from '@apollo/client'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { GET_PARTICULAR_USER } from '../../graphql/apollo/queries'

const useProfile = () => {
  const { id } = useParams()
  const { error, data, loading } = useQuery(GET_PARTICULAR_USER, { variables: {id: String(id)}})

  console.log('data', data)

  const profileData = useMemo(() => {
    const { name, username, id, phone, website, company, address } = data?.user
    return { name, username, id, phone, website, companyName: company?.name, address:address }

  },[data])
  
  return [{ error, data, loading, profileData }, id]
}

export default useProfile