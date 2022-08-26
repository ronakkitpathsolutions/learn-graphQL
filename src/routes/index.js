import React, { lazy } from 'react'
const Post = lazy(() => import('../presentation/admin/Post')) 
const Profile = lazy(() => import('../presentation/admin/Profile'))
const Dashboard = lazy(() => import('../presentation/layout/Layout'))
const Users = lazy(() => import('../presentation/admin/Users'))
const Photos = lazy(() => import('../presentation/admin/Photos'))
const Comments = lazy(() => import('../presentation/admin/Commets'))
const Posts = lazy(() => import('../presentation/admin/Posts'))

const routes = [
  {
    id: "initial",
    path: '/',
    element: <Users/>
  },
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
  },
  {
    id: "profile",
    path: '/profiles/:id',
    element: <Profile className="profile-component" />
  },
  {
    id: "post",
    path: 'posts/:id/comments',
    element: <Post className="post-component" />
  }
]

const Routing = ({...props}) => <Dashboard {...props} {...{routes}} />


export default Routing