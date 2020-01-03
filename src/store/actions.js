import axios from 'axios'

export default {
  GET_ACTIVE_POST () {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:1337/api/v1/post/get')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  SEARCH_POSTS (context, {title, location}) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:1337/api/v1/post/get/search', {
        params: {
          title: title,
          city: location
        }
      })
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  ADD_POST (context, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:1337/api/v1/post/create', data)
        .then((response) => {
          console.log(response)
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  ADD_IMAGE (context, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:1337/api/v1/upload/image', data, {headers: { 'Content-Type': 'multipart/form-data' }})
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}
