import * as api from '../api/api'

import { AUTH, ADMIN_AUTH } from '../constants/constants'

export const login = (loginData) => async dispatch => {
	try {
		const { data } = await api.login(loginData)

		dispatch({ type: AUTH, data })
		window.location.pathname = "/"
	}
	catch(e) {
		console.log(`Login: ${e}`)
	}
}

export const register = (registerData, redirect) => async dispatch => {
	try {
		const { data } = await api.register(registerData)

		dispatch({ type: AUTH, data })
		redirect("/")
	}
	catch(e) {
		console.log(`Register: ${e}`)
	}
}

export const adminLogin = loginData => async dispatch => {
	try {
		const { data } = await api.adminLogin(loginData)

		dispatch({ type: ADMIN_AUTH, data })
		window.location.pathname = "/admin-page/"
	}
	catch(e) {
		console.log(`Login: ${e}`)
	}
}