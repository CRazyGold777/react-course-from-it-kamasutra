import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const FETCHING = 'FETCHING';
const UPDATE_STATUS = "UPDATE_STATUS";

let initialState = {
	isFetching: true,
	profile: {
		fullName: "...",
		photos: {
			large: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
		}
	},
	myPosts: [
		{ id: 1, post: "Hi, how are you?" },
		{ id: 2, post: "It is my first post" },
	],
	status: "---",
}

export const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let myPost = state.myPosts;
			let idLast = myPost[myPost.length - 1].id + 1;
			return {
				...state,
				myPosts: [...state.myPosts, { id: idLast, post: action.message }],
			}
		case SET_PROFILE:
			return { ...state, profile: action.profile }
		case FETCHING:
			return { ...state, isFetching: action.isFetching }
		case UPDATE_STATUS:
			return { ...state, status: action.status }
		default:
			return state;
	}
}

const addPost = (message) => ({ type: ADD_POST, message })

export const setProfile = (profile) => ({ type: SET_PROFILE, profile, })

export const updateFetching = (isFetching) => ({ type: FETCHING, isFetching })

const updateStatus = (status) => ({ type: UPDATE_STATUS, status })

export const setProfileThunkCreator = (id) => (dispatch) => {
	profileAPI.getUser(id)
		.then(data => {
			dispatch(setProfile(data))
			dispatch(updateFetching(false))
		})
	profileAPI.getStatus(id)
		.then(data => {
			if (data === null) dispatch(updateStatus("Empty"));
			else dispatch(updateStatus(data))
		})
}

export const putStatusProfileTC = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(responce => {
			if (responce.data.resultCode === 0) dispatch(updateStatus(status))
		})
}

export const addPostTC = (message) => (dispatch) => {
	dispatch(addPost(message))
}