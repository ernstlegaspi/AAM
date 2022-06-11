import express from 'express'

import { getBlogs, getSingleBlog, getLatestBlogs, addBlog } from '../controllers/blogsController.js'

const route = express.Router()

route.get(`/`, getBlogs)
route.get(`/id/:title`, getSingleBlog)
route.get(`/latest`, getLatestBlogs)
route.post(`/`, addBlog)

export default route