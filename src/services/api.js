import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmovie-notes-api.onrender.com"
})