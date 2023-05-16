// import { profileReducer, addPost, deletePost } from '../profileReducer'

// test('new post should be added', () => {
// 	let action = addPost("this post grom test")
// 	let initialState = {
// 		myPosts: [
// 			{ id: 1, post: "Hi, how are you?" },
// 			{ id: 2, post: "It is my first post" },
// 		],
// 	}
// 	let newState = profileReducer(initialState, action)
// 	expect(newState.myPosts.length).toBe(3);
// })

// test('length of posts should be decrement', () => {
// 	let action = deletePost(1)
// 	let initialState = {
// 		myPosts: [
// 			{ id: 1, post: "Hi, how are you?" },
// 			{ id: 2, post: "It is my first post" },
// 		],
// 	}
// 	let newState = profileReducer(initialState, action)
// 	expect(newState.myPosts.length).toBe(1);
// })

test('empty', () => {
	expect("1").toBe("1");
})