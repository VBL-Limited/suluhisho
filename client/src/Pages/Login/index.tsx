import { FormikValues } from 'formik'
import { Loginform } from '../../components'
import axios from 'axios'
import { useState } from 'react'
import {} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Login = () => {
  const [errorMessage, setErrorMessage] = useState()
  const handleSubmit = (values: FormikValues) => {
    axios
      .post('http://127.0.0.1:5000/api/auth/login', {
        values,
      })
      .then(
        (response) => {
          console.log(response)
          if (response.data.success) {
            localStorage.setItem('user', response.data)
            ;<Navigate to="AddJob" />
          }
          setErrorMessage(response.data.message)
        },
        (error) => {
          console.log(error)
        },
      )
  }
  return (
    <>
      <Loginform
        error={errorMessage}
        handleLogin={(val: any) => handleSubmit(val)}
      />
    </>
  )
}
export default Login
