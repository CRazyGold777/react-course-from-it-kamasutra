import { usersAPI } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const SET_USERS = 'users/SET-USERS';
const CURRENT_PAGE = 'users/CURRENT-PAGE'
const TOTAL_COUNT = 'users/TOTAL-COUNT'
const FETCHING = 'users/FETCHING'
const IS_FOLLOWING = 'users/IS_FOLLOWING'


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	isFollowing: false,
}

export const usersReducer = (state = initialState, action) => {
	// debugger
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						u.followed = !u.followed;
					}
					return u;
				})
			}

		case SET_USERS:
			return { ...state, users: [...action.users] }
		case CURRENT_PAGE:
			return { ...state, currentPage: action.page }
		case TOTAL_COUNT:
			return { ...state, totalUsersCount: action.count }
		case FETCHING:
			return { ...state, isFetching: action.isFetching }
		case IS_FOLLOWING:
			return { ...state, isFollowing: action.isFollowing }
		default:
			return state;
	}
}

export const updateFollow = (id) => ({ type: FOLLOW, id })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const updateCurrentPage = (page) => ({ type: CURRENT_PAGE, page })

export const setTotalUsersCount = (count) => ({ type: TOTAL_COUNT, count })

export const updateFetching = (isFetching) => ({ type: FETCHING, isFetching })

export const updateFollowing = (isFollowing) => ({ type: IS_FOLLOWING, isFollowing })


export const toggleFollowThunkCreator = (u) => async (dispatch) => {
	dispatch(updateFollowing(true));
	let resultCode;
	if (u.followed) {
		resultCode = await usersAPI.unfollow(u.id);
	}
	else {
		resultCode = await usersAPI.follow(u.id)
	}
	if (resultCode === 0) {
		dispatch(updateFollow(u.id));
		dispatch(updateFollowing(false));
	}
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
	dispatch(updateFetching(true))
	let responce = await usersAPI.getUsers(currentPage, pageSize)

	dispatch(updateFetching(false))
	dispatch(setUsers(responce.items))
	dispatch(setTotalUsersCount(responce.totalCount))
}

export const updateUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
	dispatch(updateCurrentPage(currentPage))
	dispatch(updateFetching(true))
	let responce = await usersAPI.getUsers(currentPage, pageSize)

	dispatch(updateFetching(false))
	dispatch(setUsers(responce.items))
}


