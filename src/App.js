import React, { Fragment, Suspense } from 'react'
import Routing from './routes'
import './style/style.css'
import 'antd/dist/antd.css'
import CustomLoader from './shared/CustomLoader'

const App = ({...props}) => {
  return (
    <Fragment>
      <Suspense fallback={<CustomLoader className="custom-loader" />} >
        <Routing {...props} />
      </Suspense>
    </Fragment>
  )
}

export default App
