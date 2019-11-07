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
    console.log(location)
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
  }
}
