// src/api/axios.js
// import axios from 'axios'

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
//   // headers, timeout, etc. can go here
// })

// export default instance
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default instance;
