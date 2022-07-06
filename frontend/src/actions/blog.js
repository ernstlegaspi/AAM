import * as api from '../api/api'

import { GET_BLOGS, GET_SINGLE_BLOG, GET_LATEST_BLOGS, GET_SAVED_BLOGS, ADD_BLOG } from '../constants/constants'

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
		console.log(data)
		
		dispatch({ type: ADD_BLOG, payload: data })
	}
	catch(e) {
		console.log(`Add Blogs: ${e}`)
	}
}

export const getSavedBlogs = () => async dispatch => {
	try {
		const { data } = await api.getSavedBlogs()
		
		dispatch({ type: GET_SAVED_BLOGS, payload: data })
	}
	catch(e) {
		console.log(`Get Saved Blogs: ${e}`)
	}
}

export const addSavedBlog = formData => async () => {
	try {
		await api.addSavedBlog(formData)
	}
	catch(e) {
		console.log(`Add Saved Blogs: ${e}`)
	}
}

export const deleteSavedBlog = id => async () => {
	try {
		await api.deleteSavedBlog(id)
	}
	catch(e) {
		console.log(`Delete Saved Blogs: ${e}`)
	}
}