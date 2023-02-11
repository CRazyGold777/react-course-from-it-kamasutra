import { authAPI } from "../api/api";

const SET_AUTH = 'SET-AUTH';
const IS_AUTH = 'IS_AUTH';
const ERROR_FROM_SERVER = 'ERROR_FROM_SERVER';

let initialState = {
	messages: [],
	data: {
		id: null,
		email: null,
		login: null
	},
	isAuth: false,
	error: null
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
		case ERROR_FROM_SERVER:
			return {
				...state,
				error: action.error
			}

		default:
			return state;
	}
}

const setAuth = (auth) => ({ type: SET_AUTH, auth })

const toggleAuth = (toggleAuth) => ({ type: IS_AUTH, toggleAuth })

const infoAboutError = (error) => ({ type: ERROR_FROM_SERVER, error })

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
				dispatch(infoAboutError(null))
			} else {
				const message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
				dispatch(infoAboutError(message))
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