import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import './css/blog.css'

const Blog = () => {
	const blogs = useSelector(blog => blog.reducers.blog)
	
	return(
		<>
			<div className="blog">
				<Grid className="blog" container spacing={2}>
					{
						blogs.map(blog => {
							return <Grid key={blog._id} item xs={4}>
								<a href="/" className="blog-content">
									<div>
										<img src={blog.image} loading="lazy" alt={blog.title} />
									</div>
									<p>{blog.title}</p>
								</a>
							</Grid>
						})
					}
				</Grid>
			</div>
		</>
	)
}

export default Blog