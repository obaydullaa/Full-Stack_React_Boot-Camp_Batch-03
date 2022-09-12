import axios from 'axios'

const isProduction = import.meta.env.PROD

export const axiosPublicInstance = axios.create({
  baseURL: isProduction
    ? import.meta.env.VITE_PRODUCTION_URL
    : import.meta.env.VITE_DEVELOPMENT_URL,
})

// export const token = JSON.parse(localStorage.getItem('token'))

export const axiosPrivateInstance = (token) =>
  axios.create({
    baseURL: isProduction
      ? import.meta.env.VITE_PRODUCTION_URL
      : import.meta.env.VITE_DEVELOPMENT_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

// const token = JSON.parse(localStorage.getItem('token'))

// export const axiosPrivateInstance = (token) =>
//  axios.create({
//     baseURL: 'http://localhost:1337/api',
//     headers: {
//         Authorization: `Bearer ${token}`,
//       },
// })