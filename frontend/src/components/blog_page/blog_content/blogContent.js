import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Circle from '@material-ui/core/CircularProgress'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import './css/blogContent.css'

const BlogContent = () => {
	const [checkLength, setCheckLength] = useState(null)
	const blog = useSelector(blog_ => blog_.reducers.blog)
	const { title } = useParams()

	useEffect(() => {
		if(blog.length > 1) blog.map(blog_ => blog_.title === title ? setCheckLength(blog_) : null)
	})

	return(
		!checkLength || blog.length === 0 || (blog.length > 1 && !checkLength) ? <div className="blog-content-waiting">
			<Circle />
		</div> : <div className="blog-content-page">
			<div className="blog-content-bg">
				<div className="blog-header">
					<img src={checkLength.image} alt={checkLength.title} />
					<div>
						<h1>{checkLength.title.replace(/-/g, " ")}</h1>
						<p>{moment(checkLength.createdAt).format('LL')}</p>
					</div>
				</div>
				<div className="blog-description">
					<p>{checkLength.description}</p>
				</div>
			</div>
		</div>
	)
}

export default BlogContent