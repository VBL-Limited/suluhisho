export default function authHeader() {
  let user: any = localStorage.getItem('user')

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken }
  } else {
    return {}
  }
}
