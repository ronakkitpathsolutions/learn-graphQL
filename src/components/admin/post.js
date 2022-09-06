import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { GET_PARTICULAR_POST, UPDATE_COMMENTS_DATA } from '../../graphql/apollo/queries'
import { customValidation } from '../../utils/validation'

const initialState = {
  id: null,
  name: "",
  email: "",
  comment: ""
}

const usePost = () => {
  const { id } = useParams()
  const [commentsData, setCommentsData] = useState({...initialState})
  const [isOpenModal, setIsOpenModal] = useState({
    isEdit: false,
    isDelete: false
  })
  const [errorMessage, setErrorMessage] = useState({})
  const { error, data, loading } = useQuery(GET_PARTICULAR_POST, { variables: { id: String(id) } })
  const [updateComment, {error: commentError, loading: commentLoading}] = useMutation(UPDATE_COMMENTS_DATA)

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
    setCommentsData({...singleData, comment: singleData?.body})
    setIsOpenModal({...isOpenModal, isEdit: true})
    setErrorMessage({})
  }

  const handleDeleteComment = (e, commentId) => {
    e?.stopPropagation()
    setIsOpenModal({...isOpenModal, isDelete: true})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCommentsData({...commentsData, [name]: value})
    setErrorMessage({...errorMessage, [name]: customValidation(name, value)})
  }

  const handleSubmit = async() => {
    try {
      const cloneData = {}
      const { id, name, email, comment } = commentsData
      Object.keys({ name, email, comment }).forEach((val) => {
        const error = customValidation(val, commentsData[val])
        cloneData[val] = error
      })
      if(Object.values(cloneData)?.filter(data => data !== "")?.length){
        setErrorMessage({...cloneData}) 
        return
      }else{
        await updateComment({variables: { id, name, email, comment }})
        handleCancel('isEdit')
      }
    } catch (error) {
      console.log('error', error, commentError)
    }
  }

  const handleCancel = (key) => setIsOpenModal({...isOpenModal, [key]: false})

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
      name: "comment",
      type: "textarea",
      rows: 6,
      value: commentsData?.comment,
      onChange: handleChange,
      isError: true,
      errorMessage: errorMessage?.comment
    }
  ]

  return [{ error, loading, profileData }, handleEditComment, formData, handleSubmit, { commentLoading }, isOpenModal, handleCancel, handleDeleteComment]
}

export default usePost