import axios from "axios";

// настройка базових запитів до серверу, для зменшення коду
const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
			.then(response => response.data.resultCode)
	},
	follow(id) {
		return instance.post(`follow/${id}`)
			.then(response => response.data.resultCode)
	}
}

export const profileAPI = {
	getUser(id) {
		return instance.get(`profile/${id}`)
			.then(response => response.data)
	},
	getStatus(id) {
		return instance.get(`profile/status/${id}`)
			.then(responce => responce.data)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
	}
}

export const authAPI = {
	getMe() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe })
	},
	logOut() {
		return instance.delete(`auth/login`)
	}
}
