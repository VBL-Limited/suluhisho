import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import * as Yup from 'yup'
import { Formik } from 'formik'
import colors from '../../theme/colors'
const loginSchema = Yup.object({
  email: Yup.string()
    .email(`S'il vous plaît, mettez une adresse email valide`)
    .required('Please enter a valid email'),
  password: Yup.string().required('Mot de passe requis'),
})

const initialLoginValue = {
  email: '',
  password: '',
}
type LoginFormProps = {
  onSubmit: Function
  openLogin: any
  handleClose: any
}
const LoginForm = ({ onSubmit, openLogin, handleClose }: LoginFormProps) => {
  return (
    <div>
      <Dialog
        open={openLogin}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
          Je veux me connectez sur Suluhisho
        </DialogTitle>

        <DialogContent>
          <Formik
            validationSchema={loginSchema}
            initialValues={initialLoginValue}
            onSubmit={async (values) => onSubmit(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Grid container spacing={2} style={{ marginTop: '16px' }}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Votre Email"
                      value={values.email}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.email && errors.email}
                      error={touched.email && Boolean(errors.email)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Mot de passe"
                      InputLabelProps={{ shrink: true }}
                      value={values.password}
                      onChange={handleChange}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.password && errors.password}
                      error={touched.password && Boolean(errors.password)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      sx={{ backgroundColor: colors.primary, width: '100%' }}
                      type="submit"
                      variant="contained"
                      size="large"
                    >
                      Connexion
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default LoginForm
