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
			<div className="blogs-nav">
				<h1><a href="/">AAM</a></h1>
				<div className="blogs-navbar">
					<p><a href="/blogs/">Blogs</a></p>
					<p><a href="/login/">Login</a></p>
				</div>
			</div>
			<h2>Blogs</h2>
			<div className="blogs-underline"></div>
			<Blog />
		</div>
	)
}

export default Blogs