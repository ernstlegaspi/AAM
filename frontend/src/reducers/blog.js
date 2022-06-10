import { GET_BLOGS, GET_LATEST_BLOGS, ADD_BLOG } from '../constants/constants'

const blogs = (blogs = [], action) => {
	switch(action.type) {
		case GET_BLOGS:
		case GET_LATEST_BLOGS:
			return action.payload
		case ADD_BLOG:
			return [...blogs, action.payload]
		default: return blogs
	}
}

export default blogs