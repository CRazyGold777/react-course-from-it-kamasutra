import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunk));