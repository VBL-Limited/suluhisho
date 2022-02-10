import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { getToken } from '../User'

function PrivateRoute({ element, ...rest }) {
  const navigate = useNavigate()
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <element {...props} />
        ) : (
          navigate("/login")
        )
      }
    />
  )
}

export default PrivateRoute
