import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './css/blog.css'
import Star from './star/star'

const Blog = () => {
	const blogs = useSelector(blog => blog.reducers.blog)
	const navigate = useNavigate()
	const token = JSON.parse(localStorage.getItem(`profile`))

	const blogClick = title => navigate(`/blogs/${title}`)

	return(
		blogs.length === 0 ? <div className="blog-circle">
			<CircularProgress />
		</div> : <div className="blog">
			<Grid className="blog" container spacing={2}>
				{
					blogs.map(blog => {
						return <Grid className="blog-grid" key={blog._id} item xs={4}>
							{token ? <Star blog={blog} /> : null}
							<div onClick={() => blogClick(blog.title)} className="blog-content">
								<div>
									<img src={blog.image} loading="lazy" alt={blog.title} />
								</div>
								<p>{ blog.title.replace(/-/g, " ") }</p>
							</div>
						</Grid>
					})
				}
			</Grid>
		</div>
	)
}

export default Blog