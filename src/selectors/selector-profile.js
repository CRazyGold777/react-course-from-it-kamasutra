export const getProfile = state => {
	return state.profilePage.profile;
}

export const getProfileStatus = state => {
	return state.profilePage.status;
}

export const isProfilePageFetching = state => {
	return state.profilePage.isFetching;
}

export const getProfilePosts = state => {
	return state.profilePage.myPosts;
}