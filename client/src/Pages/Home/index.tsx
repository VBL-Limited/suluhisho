import { Hero, JobCard, Notification } from '../../components'
import { useEffect, useState } from 'react'
import { getToken, getUser } from '../../api/User'
import axios from 'axios'
const Home = () => {
  const [userInfo, setUserInfos] = useState()
  const token = getToken()
  const user = getUser()
  const [jobs, setJobs] = useState<any>()
  const [isLogedin, setIsloggedin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [status, setStatus] = useState<any>()
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/api/offre?page=1&limit=3`).then((res) => {
      const offres = res.data
      if (offres.results) {
        setLoading(false)
        setJobs(offres?.results)
      }
    })
  }, [token])
  useEffect(() => {
    if (user) {
      setUserInfos(user.userId)
    }
  }, [user])
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setIsloggedin(false)
  }

  const handleAppy = (offreId: any) => {
    if (userInfo) {
      setIsloggedin(true)
      setStatusMessage('Vous avez postulé avec succès à ce poste')
      setStatus('success')
    } else {
      setIsloggedin(true)
      setStatus('error')
      setStatusMessage('Vous devez vous connecter pour postuler')
    }
    console.log('OffereId', offreId)
    console.log('userId', userInfo)
    setIsloggedin(true)
  }
  console.log(jobs)
  return (
    <>
      <Hero />

      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="w-20 h-20 border-b-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <JobCard jobs={jobs} handleApply={handleAppy} />
      )}
      <Notification
        isError={isLogedin}
        handleClose={handleClose}
        status={status}
        message={statusMessage}
      />
    </>
  )
}
export default Home
