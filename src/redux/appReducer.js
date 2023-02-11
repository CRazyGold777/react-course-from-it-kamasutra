import { setAuthThunkCreator } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
	initialized: false,
}

export const appReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}
		default:
			return state;
	}
}

export const setInit = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(setAuthThunkCreator())
	Promise.all([promise]).then(() => {
		dispatch(setInit())
	})

}	
