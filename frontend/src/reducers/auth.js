import { AUTH, ADMIN_AUTH, LOGOUT } from "../constants/constants";

const Auth = (state = { auth: null }, action) => {
	switch(action.type) {
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
			return { ...state, auth: action?.data }
		case ADMIN_AUTH:
			localStorage.setItem('admin', JSON.stringify({ ...action?.data }))
			console.log("Wew")
			return { ...state, auth: action?.data }
		case LOGOUT:
			localStorage.clear()
			return { ...state, auth: null }
		default:
			return { ...state }
	}
}

export default Auth