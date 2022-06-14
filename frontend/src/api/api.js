import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:2217/" })

API.interceptors.request.use(req => {
	if(localStorage.getItem(`profile`)) req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(`profile`)).token}`
	return req
})

export const getBlogs = () => API.get(`blogs`)
export const getSingleBlog = title => API.get(`blogs/id/${title}`)
export const getLatestBlogs = () => API.get(`blogs/latest`)
export const addBlog = formData => API.post(`blogs`, formData)

export const login = loginData => API.post(`/auth/login`, loginData)
export const register = registerData => API.post(`/auth/register`, registerData)