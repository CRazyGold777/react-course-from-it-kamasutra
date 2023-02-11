const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let myMessage = state.messages;
			let idLast = myMessage[myMessage.length - 1].id + 1;
			return {
				...state,
				messages: [...state.messages, { id: idLast, name: 'Me', text: action.message }],
			}

		default:
			return state;
	}

}

const addMessage = (message) => {
	return {
		type: ADD_MESSAGE,
		message
	}
}

export const addMessageTC = (message) => (dispatch) => {
	// запит на серв
	dispatch(addMessage(message));
}