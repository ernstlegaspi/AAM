import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LatestBlogs from './latest_blogs/latestBlogs'
import { getLatestBlogs } from '../../actions/blog'
import './css/home.css'

const Home = () => {
	const blogs = useSelector(blog => blog.reducers.blog)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getLatestBlogs())
	}, [blogs, dispatch])
	
	return(
		<div className="home">
			<div className="home-header">
				<div className="home-nav">
					<h1><a href="/">AAM</a></h1>
					<div className="home-navbar">
						<p><a href="/blogs/">Blogs</a></p>
						<p><a href="/login/">Login</a></p>
					</div>
				</div>
				<div className="home-nav-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
			<div className="home-goal">
				<div className="home-who">
					<div className="home-left">
						<div>
							<h2>Who We Are</h2>
							<div className="home-underline"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
					<div className="home-right"></div>
				</div>
				<div className="home-goal">
					<div className="home-left"></div>
					<div className="home-right">
						<div>
							<h2>Purpose and Goal</h2>
							<div className="home-underline"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
				</div>
				<div className="home-team">
					<div className="home-left">
						<div>
							<h2>Our Team</h2>
							<div className="home-underline"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
					<div className="home-right"></div>
				</div>
			</div>
			<div className="home-latest-blogs">
				<h2>Latest Blogs</h2>
				<div className="home-underline"></div>
				<LatestBlogs blogs={blogs} />
			</div>
		</div>
	)
}

export default Home