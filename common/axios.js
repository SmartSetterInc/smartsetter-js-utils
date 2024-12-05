import axios from "axios"

export const noAuthAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
