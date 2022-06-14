import * as api from '../api/api'

import { AUTH } from '../constants/constants'

export const login = (loginData, redirect) => async dispatch => {
	try {
		const { data } = await api.login(loginData)

		redirect("/")
		dispatch({ type: AUTH, data })
	}
	catch(e) {
		console.log(`Login: ${e}`)
	}
}

export const register = (registerData, redirect) => async dispatch => {
	try {
		const { data } = await api.register(registerData)

		redirect("/")
		dispatch({ type: AUTH, data })
	}
	catch(e) {
		console.log(`Register: ${e}`)
	}
}