import express from 'express'

import { getBlogs, getLatestBlogs, addBlog } from '../controllers/blogsController.js'

const route = express.Router()

route.get(`/`, getBlogs)
route.get(`/latest`, getLatestBlogs)
route.post(`/`, addBlog)

export default route