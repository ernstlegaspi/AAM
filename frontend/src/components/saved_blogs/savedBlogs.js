import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

import "./css/savedBlogs.css"
import { getSavedBlogs } from '../../actions/blog'
import Star from './star/star'

const SavedBlogs = () => {
	const savedBlogs = useSelector(blog => blog.reducers.blog)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const savedBlogClick = title => navigate(`/blogs/${title}`)
	
	useEffect(() => {
		dispatch(getSavedBlogs())
		console.log(savedBlogs)
	}, [savedBlogs, dispatch])

	return(
		<div className="saved-blog-label">
			<h1>Saved Blog</h1>
			<div className="saved-blogs-underline"></div>
			{
				savedBlogs.length === 0 ? <div className="saved-blog-circle">
					<CircularProgress />
				</div> : <div className="saved-blog">
					<Grid className="saved-blog" container spacing={2}>
						{
							savedBlogs.map(savedBlog => {
								return <Grid id="saved-blog-grid" className="saved-blog-grid" key={savedBlog._id} item xs={4}>
									<Star blog={savedBlog} />
									<div onClick={() => savedBlogClick(savedBlog.title)} className="saved-blog-content">
										<div>
											<img src={savedBlog.image} loading="lazy" alt={savedBlog.title} />
										</div>
										<p>{ savedBlog.title.replace(/-/g, " ") }</p>
									</div>
								</Grid>
							})
						}
					</Grid>
				</div>
			}
		</div>
	)
}

export default SavedBlogs