import axios from 'axios'

const url = "http://localhost:2217"

export const getBlogs = () => axios.get(`${url}/blogs`)
export const getSingleBlog = title => axios.get(`${url}/blogs/id/${title}`)
export const getLatestBlogs = () => axios.get(`${url}/blogs/latest`)
export const addBlog = formData => axios.post(`${url}/blogs`, formData)