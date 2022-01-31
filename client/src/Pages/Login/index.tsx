import { FormikValues } from 'formik'
import { Loginform } from '../../Components'
const Login = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values)
  }
  return (
    <>
      <Loginform handleLogin={(val: any) => handleSubmit(val)} />
    </>
  )
}
export default Login
