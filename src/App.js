import React, { Fragment, Suspense } from 'react'
import Routing from './routes'
import './style/style.css'
import 'antd/dist/antd.css'

const App = ({...props}) => {
  return (
    <Fragment>
      <Suspense>
        <Routing {...props} />
      </Suspense>
    </Fragment>
  )
}

export default App
