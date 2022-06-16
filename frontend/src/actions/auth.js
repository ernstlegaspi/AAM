import * as api from '../api/api'

import { AUTH } from '../constants/constants'

export const login = (loginData, redirect) => async dispatch => {
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