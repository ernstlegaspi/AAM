import React from 'react'

import './css/latestBlogs.css'

const LatestBlogs = ({ blogs }) => {
	return(
		<div className="latest-blogs">
			{
				blogs.map(blog => {
					return <a href="/" className="latest-blog" key={blog._id}>
						<div>
							<img src={blog.image} loading="lazy" alt={blog.title} />
						</div>
						<p>{ blog.title }</p>
					</a>
				})
			}
		</div>
	)
}

export default LatestBlogs