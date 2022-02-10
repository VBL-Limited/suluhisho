import { SignUpform } from '../../components'
import { FormikValues } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState()
  const navigate = useNavigate()
  const handleSignUp = (values: FormikValues) => {
    axios
      .post('http://127.0.0.1:5000/api/auth/signup', {
        values,
      })
      .then(
        (response) => {
          console.log(response)
          if (response.data.success) {
            localStorage.setItem('user', response.data)
            navigate('AddJob')
            window.location.reload()
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
      <SignUpform error={errorMessage} handleSignUp={handleSignUp} />
    </>
  )
}
export default SignUp
