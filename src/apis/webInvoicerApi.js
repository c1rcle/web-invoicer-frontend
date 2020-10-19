import Axios from 'axios';

export default () =>
  Axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
    headers: localStorage.getItem('token')
      ? { Authorization: 'Bearer ' + localStorage.getItem('token') }
      : {}
  });
