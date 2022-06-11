import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getBlogs } from '../../actions/blog'
import Blog from './blog/blog'

import './css/blogs.css'

const Blogs = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	
	return(
		<div className="blogs">
			<h2>Blogs</h2>
			<div className="blogs-underline"></div>
			<Blog />
		</div>
	)
}

export default Blogs