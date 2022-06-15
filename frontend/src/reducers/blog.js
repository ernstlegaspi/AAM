import { GET_BLOGS, GET_SINGLE_BLOG, GET_LATEST_BLOGS, GET_SAVED_BLOGS, ADD_BLOG } from '../constants/constants'

const blogs = (blogs = [], action) => {
	switch(action.type) {
		case GET_BLOGS:
		case GET_LATEST_BLOGS:
		case GET_SINGLE_BLOG:
		case GET_SAVED_BLOGS:
			return action.payload
		case ADD_BLOG:
			return [...blogs, action.payload]
		default: return blogs
	}
}

export default blogs