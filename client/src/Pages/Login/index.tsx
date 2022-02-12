import { FormikValues } from 'formik'
import { Loginform } from '../../components'
import { setUserSession } from '../../api/User'
import { useState } from 'react'
// import {} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState()
  const [spinner, setSpinner] = useState(false)
  const handleSubmit = async (values: FormikValues) => {
    setSpinner(true)
    const Response = await fetch(`http://127.0.0.1:5000/api/auth/login `, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const jsonData = await Response.json()
    setSpinner(false)

    console.log(jsonData)
    console.log(spinner)
    if (jsonData.message) {
      setErrorMessage(jsonData.message)
    }
    if (jsonData.token) {
      setUserSession(jsonData.token, jsonData)
      navigate('/AddJob')
      window.location.reload()
    }
  }
  return (
    <>
      <Loginform
        error={errorMessage}
        loading={spinner}
        handleLogin={(val: any) => handleSubmit(val)}
      />
    </>
  )
}
export default Login
