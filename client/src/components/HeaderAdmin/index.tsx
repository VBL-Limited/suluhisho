import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { removeUserSession, getToken, getUser } from '../../api/User'
import { useEffect, useState } from 'react'
import { format, formatDistance, subDays } from 'date-fns'
import { Notification } from '../../components'
import { NavLink } from 'react-router-dom'
import { fr } from 'date-fns/locale'
import { Jobstype } from '../../types'
import axios from 'axios'
const Header = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    removeUserSession()
    navigate('/')
    window.location.reload()
  }
  const [userInfo, setUserInfos] = useState()
  const token = getToken()
  const user = getUser()
  const [jobs, setJobs] = useState<any>()
  const [isLogedin, setIsloggedin] = useState(false)
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

  const handleApply = async (offreId: any) => {
    if (userInfo) {
      setIsloggedin(true)
      setStatusMessage('You have applied succesully to this Job')
      setStatus('success')
    } else {
      setIsloggedin(true)
      setStatus('error')
      setStatusMessage('You have to Login to apply')
    }
    let values = {
      offreId: offreId,
      userId: userInfo,
    }
    const Response = await fetch(`http://localhost:5000/api/apply `, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const jsonData = await Response.json()
    console.log('data', jsonData)

    setIsloggedin(true)
  }
  console.log(jobs)
  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
          <h2 className="text-3xl font-semibold text-center text-indigo-600">
            Suluhisho-RH
          </h2>

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  <a
                    className="flex items-center px-6 py-2 text-gray-700 bg-gray-100 rounded-md "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="pl-4 mx-2 font-medium">
                      Offres d'emplois
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="mx-4 font-medium">Mes application</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="mx-4 font-medium">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 border-2 rounded-md hover:bg-gray-200"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="mx-4 font-medium">
                      <Button onClick={handleLogout}>Deconnexion</Button>
                    </span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full p-1 m-2 overflow-y-auto">
          <div className="flex flex-col items-center justify-center p-5 ">
            {loading && (
              <div className="flex items-center justify-center ">
                <div className="w-20 h-20 border-b-4 border-indigo-600 rounded-full animate-spin"></div>
              </div>
            )}

            {jobs &&
              jobs.map(
                ({
                  _id,
                  email,
                  nom_organisation,
                  details_offre,
                  date_limite,
                  lieu_affectation,
                  poste,
                  date_publication,
                }: Jobstype) => (
                  <div className="w-full p-4 mb-2 border-2 rounded-lg shadow-md">
                    <Stack direction="row" spacing={2}>
                      <span className="text-lg font-bold text-indigo-600">
                        POSTE:
                      </span>
                      <Typography variant="h6">{poste}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <span className="font-bold text-indigo-600 text-1xl">
                        Organisation:
                      </span>
                      <Typography variant="body1">
                        {nom_organisation}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <span className="font-bold text-indigo-600 text-1xl">
                        Date limite:
                      </span>
                      <Typography variant="body1">
                        {format(new Date(date_limite), 'd MMMM Y', {
                          locale: fr,
                        })}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <span className="font-bold text-indigo-600 text-1xl">
                        Date de publication:
                      </span>
                      <Typography variant="body1">
                        {formatDistance(
                          subDays(new Date(date_publication), 3),
                          new Date(),
                          {
                            addSuffix: true,
                            locale: fr,
                          },
                        )}
                      </Typography>
                    </Stack>

                    <div className="font-body2">{details_offre}</div>
                    <div className="flex mt-3"></div>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        onClick={() => handleApply(_id)}
                      >
                        Apply now
                      </Button>
                      <Button variant="outlined">Plus de details</Button>
                    </Stack>
                  </div>
                ),
              )}
          </div>
          <Notification
            isError={isLogedin}
            handleClose={handleClose}
            status={status}
            message={statusMessage}
          />
        </div>
      </div>
    </>
  )
}
export default Header
