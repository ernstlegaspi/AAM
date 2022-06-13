import express from 'express'

import Auth from '../middleware/auth.js'
import { getBlogs, getSingleBlog, getLatestBlogs, addBlog } from '../controllers/blogsController.js'

const route = express.Router()

route.get(`/`, getBlogs)
route.get(`/id/:title`, getSingleBlog)
route.get(`/latest`, getLatestBlogs)
route.post(`/`, Auth, addBlog)

export default route