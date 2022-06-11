import React  from 'react'
import { useNavigate } from 'react-router-dom'

import './css/latestBlogs.css'

const LatestBlogs = ({ blogs }) => {
	const navigate = useNavigate()
	const handleClick = title => navigate(`/blogs/${title}`)

	return(
		<div className="latest-blogs">
			{
				blogs.map(blog => {
					return <div onClick={() => handleClick(blog.title)} className="latest-blog" key={blog._id}>
						<div>
							<img src={blog.image} loading="lazy" alt={blog.title} />
						</div>
						<p>{blog.title.replace(/-/g, " ")}</p>
					</div>
				})
			}
		</div>
	)
}

export default LatestBlogs