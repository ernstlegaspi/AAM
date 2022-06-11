import * as api from '../api/api'

import { GET_BLOGS, GET_SINGLE_BLOG, GET_LATEST_BLOGS, ADD_BLOG } from '../constants/constants'

export const getBlogs = () => async dispatch => {
	try {
		const { data } = await api.getBlogs()
		
		dispatch({ type: GET_BLOGS, payload: data })
	}
	catch(e) {
		console.log(`Get Blogs: ${e}`)
	}
}

	export const getSingleBlog = title => async dispatch => {
	try {
		const { data } = await api.getSingleBlog(title)
		
		dispatch({ type: GET_SINGLE_BLOG, payload: { ...data, title: data.title.replace(/-/g, " ") } })
	}
	catch(e) {
		console.log(`Get Single Blog: ${e}`)
	}
}

export const getLatestBlogs = () => async dispatch => {
	try {
		const { data } = await api.getLatestBlogs()
		
		dispatch({ type: GET_LATEST_BLOGS, payload: data })
	}
	catch(e) {
		console.log(`Get Latest Blogs: ${e}`)
	}
}

export const addBlog = formData => async dispatch => {
	try {
		const { data } = await api.addBlog(formData)
		
		dispatch({ type: ADD_BLOG, payload: data })
	}
	catch(e) {
		console.log(`Add Blogs: ${e}`)
	}
}