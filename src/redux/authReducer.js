import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH = 'SET-AUTH';
const IS_AUTH = 'IS_AUTH';

let initialState = {
	messages: [],
	data: {
		id: null,
		email: null,
		login: null
	},
	isAuth: false
}

export const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_AUTH:
			return {
				...state,
				messages: action.auth.messages,
				data: action.auth.data,
			}
		case IS_AUTH:
			return {
				...state,
				isAuth: action.toggleAuth,
			}

		default:
			return state;
	}
}

export const setAuth = (auth) => ({ type: SET_AUTH, auth })

export const toggleAuth = (toggleAuth) => ({ type: IS_AUTH, toggleAuth })

export const setAuthThunkCreator = () => (dispatch) => {
	return authAPI.getMe()
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(setAuth(data))
				dispatch(toggleAuth(true))
			}
		})
}

export const loginTC = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(setAuthThunkCreator())
			} else {
				const message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
				dispatch(stopSubmit("login", { _error: message }))
			}
		})
}

export const logOutTC = () => (dispatch) => {
	authAPI.logOut()
		.then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(setAuth({ id: null, email: null, login: null }));
				dispatch(toggleAuth(false))
			}
		})
}