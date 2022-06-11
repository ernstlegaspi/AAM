import React from 'react'

import './css/navbar.css'

const Navbar = () => {
	return(
		<div className="navbar">
			<h1><a href="/">AAM</a></h1>
			<div className="navbar-nav">
				<p><a href="/blogs/">Blogs</a></p>
				<p><a href="/login/">Login</a></p>
			</div>
		</div>
	)
}

export default Navbar