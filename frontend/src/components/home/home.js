import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Close } from '@material-ui/icons'
import { Grow } from '@material-ui/core'

import LatestBlogs from './latest_blogs/latestBlogs'
import { LOGOUT } from '../../constants/constants'
import { getLatestBlogs } from '../../actions/blog'
import { login, register } from '../../actions/auth'
import './css/home.css'

const Home = () => {
	const [getLogout, setLogout] = useState(false)
	const [getIsLogin, setIsLogin] = useState(true)
	const [getMenu, setMenu] = useState(false)
	const [formData, setFormData] = useState({ username: '', email: '', password: '' })
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

	const menuClick = () => {
		setMenu(getMenu ? false : true)
		setIsLogin(true)
	}

	const formClick = () => setIsLogin(getIsLogin ? false : true)
	
	const handleFormSubmit = e => {
		e.preventDefault()

		dispatch(getIsLogin ? login(formData, navigate) : register(formData, navigate))
	}

	const setForm = e => setFormData({ ...formData, [e.target.name]: e.target.value })
	
	return(
		<div className="home">
			<div className="home-header">
				<div className="home-nav">
					<h1><a href="/">AAM</a></h1>
					<div className="home-navbar">
						<p className="home-nav-blogs-label"><a href="/blogs/">Blogs</a></p>
						{
							getUsername ? <div id="home-profile">
								<a id="home-picture" href="/">
									<p className="home-logged-in">{getUsername.username.toUpperCase().charAt(0)}</p>
								</a>
								<div id="home-menu">
									<div id="home-choices">
										<a href="/saved-blogs/">Saved Blogs</a>
										<p onClick={() => logout()} className="home-logout-button">Logout</p>
									</div>
								</div>
							</div>
							: getMenu ? <Grow in>
								<form onSubmit={handleFormSubmit}>
									<Close onClick={() => menuClick()} className="home-close" />
									<div className="home-fields">
										<input type="text" placeholder="Username" name="username" autoComplete='off' onChange={setForm} /><br />
										{
											getIsLogin ? null : <><input type="email" placeholder="Email" name="email" onChange={setForm} /><br /></>
										}
										<input type="password" placeholder="Password" name="password" onChange={setForm} /> <br />
										{
											getIsLogin ? null : <><input type="password" placeholder="Confirm Password" /><br /></>
										}
										<input type="submit" value="Submit" /> <br />
										{
											getIsLogin ? <p>Don't have an account? <span onClick={() => formClick()}>Register here</span></p>
											: <p>Already have an account? <span onClick={() => formClick()}>Login here</span></p>
										}
									</div>
								</form>
							</Grow> : <p className="login-label" onClick={() => menuClick()}>Login</p>
						}
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