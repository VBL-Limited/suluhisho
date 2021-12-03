import * as React from 'react'
import {
  Stack,
  Box,
  AppBar,
  Button,
  Toolbar,
  Container,
  Typography,
} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import colors from '../../theme/colors'
import { FormikValues } from 'formik'
import { LoginForm, SignUpForm } from '../../components'
import { pages } from '../../constants'
const Header = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values)
  }
  const onSignUpForm = (values: FormikValues) => {
    console.log(values)
  }
  const [openLogin, setOpenLogin] = React.useState(false)
  const [openSignUp, setopenSignUp] = React.useState(false)

  const handleOpenLogin = () => {
    setOpenLogin(true)
  }
  const handleOpenSignUp = () => {
    setopenSignUp(true)
  }

  const handleClose = () => {
    setopenSignUp(false)
    setOpenLogin(false)
  }

  return (
    <AppBar style={{ background: 'white', position: 'fixed', top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: colors.primary,
            }}
          >
            SUHISHO APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                size="large"
                sx={{ my: 2, display: 'block', color: colors.primary }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={handleOpenLogin}
                variant="contained"
                color="primary"
                size="large"
                style={{
                  borderRadius: 12,
                  padding: '12px',
                  backgroundColor: colors.primary,
                }}
                startIcon={<AccountBoxIcon />}
              >
                Se connectez
              </Button>
              <Button
                onClick={handleOpenSignUp}
                size="large"
                variant="contained"
                style={{
                  borderRadius: 12,
                  padding: '12px',
                  backgroundColor: colors.primary,
                }}
                startIcon={<AllInboxIcon />}
              >
                Creer un compte
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>

      <LoginForm
        openLogin={openLogin}
        handleClose={handleClose}
        onSubmit={(val: any) => handleSubmit(val)}
      />
      <SignUpForm
        openSignUp={openSignUp}
        handleClose={handleClose}
        onSignUpForm={(val: any) => handleSubmit(val)}
      />
    </AppBar>
  )
}
export default Header
