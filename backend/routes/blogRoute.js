import express from 'express'

import Auth from '../middleware/auth.js'
import { getBlogs, getSingleBlog, getLatestBlogs, getSavedBlogs, addSavedBlog, deleteSavedBlog, addBlog } from '../controllers/blogsController.js'

const route = express.Router()

route.get(`/`, getBlogs)
route.get(`/id/:title`, getSingleBlog)
route.get(`/latest`, getLatestBlogs)
route.post(`/`, Auth, addBlog)
route.get(`/saved`, Auth, getSavedBlogs)
route.post(`/saved`, Auth, addSavedBlog)
route.delete(`/saved/:id`, Auth, deleteSavedBlog)

export default route