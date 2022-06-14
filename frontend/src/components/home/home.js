import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import LatestBlogs from './latest_blogs/latestBlogs'
import { LOGOUT } from '../../constants/constants'
import { getLatestBlogs } from '../../actions/blog'
import './css/home.css'

const Home = () => {
	const [getLogout, setLogout] = useState(false)
	const blogs = useSelector(blog => blog.reducers.blog)
	const dispatch = useDispatch()
	const getUsername = JSON.parse(localStorage.getItem(`profile`))
	const navigate = useNavigate()
	
	useEffect(() => {
		dispatch(getLatestBlogs())
	}, [blogs, dispatch])

	useEffect(() => {
		const setId = id => document.getElementById(id)
		
		const homeProfile = setId(`home-profile`)
		const homeMenu = setId(`home-menu`)
		const homeChoices = setId(`home-choices`)

		if(getUsername) setLogout(true)

		if(getLogout) {
			homeProfile.onmouseenter = () => {
				homeMenu.style.display = `block`
				homeChoices.style.opacity = `1`
			}
	
			homeProfile.onmouseleave = () => {
				homeMenu.style.display = `none`
				homeChoices.style.opacity = `0`
			}
		}
	}, [getUsername, getLogout])

	const logout = () => {
		dispatch({ type: LOGOUT })
		setLogout(false)
		navigate("/")
	}
	
	return(
		<div className="home">
			<div className="home-header">
				<div className="home-nav">
					<h1><a href="/">AAM</a></h1>
					<div className="home-navbar">
						<p className="home-nav-blogs-label"><a href="/blogs/">Blogs</a></p>
						{ getUsername ?
							<div id="home-profile">
								<a id="home-picture" href="/">
									<p className="home-logged-in">{getUsername.username.toUpperCase().charAt(0)}</p>
								</a>
								<div id="home-menu">
									<div id="home-choices">
										<p>Saved Blogs</p>
										<p onClick={() => logout()} className="home-logout-button">Logout</p>
									</div>
								</div>
							</div>
						: <p><a href="/login/">Login</a></p> }
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