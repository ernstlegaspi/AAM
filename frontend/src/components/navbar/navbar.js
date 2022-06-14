import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import './css/navbar.css'

const Navbar = () => {
	const getUsername = JSON.parse(localStorage.getItem(`profile`))
	
	return(
		<div className="navbar">
			<h1><a href="/">AAM</a></h1>
			<div className="navbar-nav">
				<p><a href="/blogs/">Blogs</a></p>
				{ getUsername ? <a href="/">
					<p className="navbar-logged-in">{getUsername.username.toUpperCase().charAt(0)}</p>
					</a> : <p><a href="/login/">Login</a></p>
				}
			</div>
		</div>
	)
}

export default Navbar