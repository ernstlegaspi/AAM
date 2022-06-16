import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Close } from '@material-ui/icons'
import { Grow } from '@material-ui/core'

import './css/navbar.css'
import { LOGOUT } from '../../constants/constants'
import { login, register } from '../../actions/auth'

const Navbar = () => {
	const [getLogout, setLogout] = useState(false)
	const [getIsLogin, setIsLogin] = useState(true)
	const [getMenu, setMenu] = useState(false)
	const [formData, setFormData] = useState({ username: '', email: '', password: '' })
	const getUsername = JSON.parse(localStorage.getItem(`profile`))
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const setId = id => document.getElementById(id)
		
		const navbarProfile = setId(`navbar-profile`)
		const navbarMenu = setId(`navbar-menu`)
		const navbarChoices = setId(`navbar-choices`)

		if(getUsername) setLogout(true)

		if(getLogout) {
			navbarProfile.onmouseenter = () => {
				navbarMenu.style.display = `flex`
				navbarChoices.style.opacity = `1`
			}
	
			navbarProfile.onmouseleave = () => {
				navbarMenu.style.display = `none`
				navbarChoices.style.opacity = `0`
			}
		}
	}, [getUsername, getLogout])

	const logout = () => {
		dispatch({ type: LOGOUT })
		setLogout(false)
		window.location.pathname = "/"
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
		<div className="navbar">
			<h1><a href="/">AAM</a></h1>
			<div className="navbar-nav">
				<p className="blogs-label"><a href="/blogs/">Blogs</a></p>
				{
					getUsername ? <div id="navbar-profile">
						<a id="navbar-picture" href="/">
							<p className="navbar-logged-in">{getUsername.username.toUpperCase().charAt(0)}</p>
						</a>
						<div id="navbar-menu">
							<div id="navbar-choices">
								<a href="/saved-blogs/">Saved Blogs</a>
								<p onClick={() => logout()} className="navbar-logout-button">Logout</p>
							</div>
						</div>
					</div>
					: getMenu ? <Grow in>
						<form onSubmit={handleFormSubmit}>
							<Close onClick={() => menuClick()} className="navbar-close" />
							<div className="navbar-fields">
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
	)
}

export default Navbar