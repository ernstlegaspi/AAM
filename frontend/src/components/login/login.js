import React, { useState, useEffect } from 'react'

import './css/login.css'

const Login = () => {
	const [getClick, setClick] = useState("login")

	useEffect(() => {
		
	})

	return(
		<div className="login">
			<div className="form">
				<div className="form-change">
					<p style={{color: getClick === "login" ? "#fff" : "#353535", backgroundColor: getClick === "login" ? "#5e222e" : "#fff"}} onClick={() => setClick("login")} id="login-button" className="form-button">Login</p>
					<p style={{color: getClick === "register" ? "#fff" : "#353535", backgroundColor: getClick === "register" ? "#5e222e" : "#fff"}} onClick={() => setClick("register")} id="register-button" className="form-button">Register</p>
				</div>
				<form>
					<input type="text" placeholder="Username" /> <br />
					{ getClick === "register" ? <>
						<input type="email" placeholder="Email" /> <br />
					</> : null }
					<input type="password" placeholder="Password" /> <br />
					{ getClick === "register" ? <>
						<input type="password" placeholder="Confirm Password" /> <br />
					</> : null }
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	)
}

export default Login