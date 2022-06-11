import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSingleBlog } from '../../actions/blog'
import BlogContent from './blog_content/blogContent'

const BlogPage = () => {
	const dispatch = useDispatch()
	const { title } = useParams()
	
	useEffect(() => {
		dispatch(getSingleBlog(title))
	}, [title, dispatch])
	
	return(<BlogContent />)
}

export default BlogPage