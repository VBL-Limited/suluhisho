import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import * as Yup from 'yup'
import { Formik } from 'formik'
import colors from '../../theme/colors'
const signUpSchema = Yup.object({
  email: Yup.string()
    .email(`S'il vous plaît, mettez une adresse email valide`)
    .required('Please enter a valid email'),
  password: Yup.string().required('Mot de passe requis'),
  mobile: Yup.string().required('Le numéro de téléphone est requis'),
  name: Yup.string().required('Le nom est requis'),
  organisation: Yup.string().required(
    'Veuillez indiquer le nom de votre organisation',
  ),
})
const initialSignUpValue = {
  email: '',
  mobile: '',
  organisation: '',
  name: '',
  password: '',
}
type SignUpFormProps = {
  onSignUpForm: Function
  openSignUp: any
  handleClose: any
}
const SignUpForm = ({
  onSignUpForm,
  openSignUp,
  handleClose,
}: SignUpFormProps) => {
  return (
    <div>
      <Dialog
        open={openSignUp}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
          Creer un compte Suluhisho{' '}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {` Après avoir créé un compte avec un compte payant, vous pourrez gérer entièrement vos tâches RH comme une
              star`}
          </DialogContentText>
          <Formik
            validationSchema={signUpSchema}
            initialValues={initialSignUpValue}
            onSubmit={async (values) => onSignUpForm(values)}
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
                      id="Name"
                      name="name"
                      label="Votre Nom"
                      value={values.name}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.name && errors.name}
                      error={touched.name && Boolean(errors.name)}
                    />
                  </Grid>
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="organisation"
                      name="organisation"
                      label="Nom de l'Organization"
                      value={values.organisation}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.organisation && errors.organisation}
                      error={
                        touched.organisation && Boolean(errors.organisation)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="mobile"
                      name="mobile"
                      label="Numero de Telephone"
                      value={values.mobile}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.mobile && errors.mobile}
                      error={touched.mobile && Boolean(errors.mobile)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Votre mot de passe"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        style: { height: '50px', padding: '12px 14px' },
                      }}
                      helperText={touched.password && errors.password}
                      error={touched.password && Boolean(errors.password)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: colors.primary, width: '100%' }}
                      size="large"
                      type="submit"
                    >
                      Enregister
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
export default SignUpForm
