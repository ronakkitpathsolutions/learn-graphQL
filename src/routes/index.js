import React, { lazy } from 'react'
const Dashboard = lazy(() => import('../presentation/layout/Layout'))
const Users = lazy(() => import('../presentation/admin/Users'))
const Photos = lazy(() => import('../presentation/admin/Photos'))
const Comments = lazy(() => import('../presentation/admin/Commets'))
const Posts = lazy(() => import('../presentation/admin/Posts'))

const routes = [
  {
    id: "users",
    path: '/users',
    element: <Users/>
  },
  {
    id: "photos",
    path: '/photos',
    element: <Photos/>
  },
  {
    id: "comments",
    path: '/comments',
    element: <Comments/>
  },
  {
    id: "posts",
    path: '/posts',
    element: <Posts/>
  }
]

const Routing = ({...props}) => <Dashboard {...props} {...{routes}} />


export default Routing