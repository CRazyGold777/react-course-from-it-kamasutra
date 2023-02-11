import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

export let store = {
	_state: {
		profilePage: {
			myPosts: [
				{ id: 1, post: "Hi, how are you?" },
				{ id: 2, post: "It is my first post" },
			],
			newPost: '',
		},
		dialogsPage: {
			people: [
				{ id: 1, name: "Alex" },
				{ id: 2, name: "Dmitry" },
				{ id: 3, name: "Maks" },
				{ id: 4, name: "Andrey" },
				{ id: 5, name: "Igor" },
				{ id: 6, name: "Masha" },
			],
			messages: [
				{ id: 1, name: "Me", text: "My first message" },
				{ id: 2, name: "Alex", text: "My second message" },
				{ id: 3, name: "Me", text: "My third message" },
				{ id: 4, name: "Alex", text: "My fourth message" },
			],
			newMessage: '',
		},
	},
	_reRenderTree() { },
	subscibe(observ) {
		this._reRenderTree = observ;
	},
	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._reRenderTree(store)
	}
}



