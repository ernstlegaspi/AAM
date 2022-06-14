import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './css/login.css'
import { login, register } from '../../actions/auth'

const Login = () => {
	const [getClick, setClick] = useState("login")
	const [formData, setFormData] = useState({ username: '', email: '', password: '' })
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleFormSubmit = e => {
		e.preventDefault()

		dispatch(getClick === "login" ? login(formData, navigate) : register(formData, navigate))
	}

	const setForm = e => setFormData({ ...formData, [e.target.name]: e.target.value })

	return(
		<div className="login">
			<div className="form">
				<div className="form-change">
					<p style={{color: getClick === "login" ? "#fff" : "#353535", backgroundColor: getClick === "login" ? "#5e222e" : "#fff"}} onClick={() => setClick("login")} id="login-button" className="form-button">Login</p>
					<p style={{color: getClick === "register" ? "#fff" : "#353535", backgroundColor: getClick === "register" ? "#5e222e" : "#fff"}} onClick={() => setClick("register")} id="register-button" className="form-button">Register</p>
				</div>
				<form onSubmit={handleFormSubmit}>
					<input type="text" placeholder="Username" name="username" onChange={setForm} /> <br />
					{ getClick === "register" ? <>
						<input type="email" placeholder="Email" name="email" onChange={setForm} /> <br />
					</> : null }
					<input type="password" placeholder="Password" name="password" onChange={setForm} /> <br />
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