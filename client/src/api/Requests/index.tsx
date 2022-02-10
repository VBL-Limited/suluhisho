import axios from 'axios'
import authHeader from '../AuthHeader'
const API_URL = 'http://localhost:8080/api/auth/'

const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return localStorage.getItem('user')
}

export default {
  login,
  logout,
  getCurrentUser,
}
