import { useRecoilValue } from 'recoil'
import { isSkeltonLoading } from '../../../recoil'
import { LoadingWrapper } from '../../../components'
import Button from '@mui/material/Button'
import { removeUserSession } from '../../../api/User'
import { useNavigate } from 'react-router-dom'
const AddJob = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeUserSession()
    navigate('/')
    window.location.reload()
  }
  const _isSkeltonLoading = useRecoilValue(isSkeltonLoading)
  return (
    <LoadingWrapper
      isLoading={_isSkeltonLoading}
      height={'90%'}
    ></LoadingWrapper>
  )
}

export default AddJob
