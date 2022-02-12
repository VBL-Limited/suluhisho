import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { getToken } from '../User'

// handle the public routes
function PublicRoute({ element, ...rest }) {
  const navigate = useNavigate()
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <element {...props} />
        ) : (
          navigate('/AddJob')
        )
      }
    />
  )
}

export default PublicRoute
