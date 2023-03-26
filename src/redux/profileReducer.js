import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET-PROFILE';
const FETCHING = 'profile/FETCHING';
const UPDATE_STATUS = "profile/UPDATE_STATUS";
const DELETE_POST = "profile/DELETE_POST";

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
	status: "---qweqwe",
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
		case DELETE_POST:
			return {
				...state,
				myPosts: state.myPosts.filter(el => {
					return el.id !== action.id
				})
			}
		default:
			return state;
	}
}

export const addPost = (message) => ({ type: ADD_POST, message })

export const deletePost = (id) => ({ type: DELETE_POST, id })

export const setProfile = (profile) => ({ type: SET_PROFILE, profile, })

export const updateFetching = (isFetching) => ({ type: FETCHING, isFetching })

const updateStatus = (status) => ({ type: UPDATE_STATUS, status })

export const setProfileThunkCreator = (id) => async (dispatch) => {
	let user = await profileAPI.getUser(id);

	dispatch(setProfile(user))
	dispatch(updateFetching(false))

	let status = await profileAPI.getStatus(id)

	if (status === null) dispatch(updateStatus("Empty"));
	else dispatch(updateStatus(status))
}

export const putStatusProfileTC = (status) => async (dispatch) => {
	let responce = await profileAPI.updateStatus(status);

	if (responce.data.resultCode === 0) dispatch(updateStatus(status))
}

export const addPostTC = (message) => (dispatch) => {
	dispatch(addPost(message))
}