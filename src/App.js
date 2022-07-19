import React, { Fragment, Suspense } from 'react'
import Routing from './routes'

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
