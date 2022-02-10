import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type notificationTypes = {
  message?: string
  isError?: boolean
  handleClose?: any
  status?: any
}
export default function Notification({
  isError,
  handleClose,
  message,
  status,
}: notificationTypes) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isError} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
