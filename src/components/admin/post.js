import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { GET_PARTICULAR_POST } from '../../graphql/apollo/queries'
import { customValidation } from '../../utils/validation'

const initialState = {
  id: null,
  name: "",
  email: "",
  body: ""
}

const usePost = () => {
  const { id } = useParams()
  const [commentsData, setCommentsData] = useState({...initialState})
  const [errorMessage, setErrorMessage] = useState({})
  const { error, data, loading } = useQuery(GET_PARTICULAR_POST, { variables: { id: String(id) } })

  const profileData = useMemo(() => {
    if (data && !loading) {
      const { id, body, title, comments } = data?.post
      return { id, body, title, comments: comments?.data }
    }
  }, [data, loading])

  const handleEditComment = (e, commentId) => {
    e?.stopPropagation();
    const allCommentsData = [...data?.post?.comments?.data]
    const singleData = allCommentsData[commentId]
    setCommentsData({...singleData})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCommentsData({...commentsData, [name]: value})
    setErrorMessage({...errorMessage, [name]: customValidation(name, value)})
  }

  const formData = [
    {
      label: "Name",
      name: "name",
      type: "input",
      value: commentsData?.name,
      onChange: handleChange,
      isError: true,
      errorMessage: errorMessage?.name
    },
    {
      label: "Email",
      name: "email",
      type: "input",
      value: commentsData?.email,
      onChange: handleChange,
      isError: true,
      errorMessage: errorMessage?.email
    },
    {
      label: "Comment",
      name: "body",
      type: "textarea",
      rows: 4,
      value: commentsData?.body,
      onChange: handleChange,
      isError: true,
      errorMessage: errorMessage?.body
    }
  ]

  return [{ error, loading, profileData }, handleEditComment, formData]
}

export default usePost