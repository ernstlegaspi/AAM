import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './css/navbar.css'
import { LOGOUT } from '../../constants/constants'

const Navbar = () => {
	const [getLogout, setLogout] = useState(false)
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
		navigate("/")
	}
	
	return(
		<div className="navbar">
			<h1><a href="/">AAM</a></h1>
			<div className="navbar-nav">
				<p className="blogs-label"><a href="/blogs/">Blogs</a></p>
				{ getUsername ?
					<div id="navbar-profile">
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
				: <p><a href="/login/">Login</a></p> }
			</div>
		</div>
	)
}

export default Navbar