import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useHistory = () => {
    const navigate = useNavigate()

    const handleRedirect = useCallback((path) => {
        navigate(path)
    },[navigate])

    return [handleRedirect]
}

export default useHistory