import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shaw-and-partners-backend.herokuapp.com/api/users'
})

export default api;