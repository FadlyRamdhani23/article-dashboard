import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const getPosts = (limit, offset) => api.get(`/article/${limit}/${offset}`)
export const getPost = (id) => api.get(`/article/${id}`)
export const createPost = (data) => api.post('/article/', data)
export const updatePost = (id, data) => api.put(`/article/${id}`, data)
export const deletePost = (id) => api.delete(`/article/${id}`)