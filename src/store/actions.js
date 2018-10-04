import axios from 'axios'
export const userActions = {
  GET_USERS (context) {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      return response
    })
  },
  GET_USER_DETAILS (context, { id }) {
    return axios.get('https://jsonplaceholder.typicode.com/users?id=' + id).then(function (response) {
      return response
    })
  }
}
