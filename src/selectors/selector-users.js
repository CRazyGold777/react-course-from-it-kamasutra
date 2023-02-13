// import { createSelector } from "reselect";

export const getUsers = state => {
	return state.usersPage.users;
}
// приклад написання складного селетора: потрыбно ініціалізувати простий селектор, який буде виртати всі значення і передати параметром до функції в нашому варіанті getUsers
// export const getUsersSuperSelector = createSelector(getUsers, (users) => {
// 	return users.filter(u => true)
// })

export const getPageSize = state => {
	return state.usersPage.pageSize;
}
export const getTotalUsersCount = state => {
	return state.usersPage.totalUsersCount;
}
export const getCurrentPage = state => {
	return state.usersPage.currentPage;
}
export const isUsersPageFetching = state => {
	return state.usersPage.isFetching;
}
export const isFollowingButtonDisable = state => {
	return state.usersPage.isFollowing;
}