import s from './NewPost.module.css'
import React from 'react'
import { MessageForm } from '../../../common/MessageForm/MessageForm';



function NewPost(props) {

	const onSubmit = (post) => {
		props.addPostTC(post)
	}

	return (
		<div className={s['new-post']}>
			<div className={s['new-post__title']}>My posts</div>
			<div className='form-post'>
				<MessageForm onSubmit={onSubmit} placeholder="your post..." button="Add post" />
			</div>
		</div>
	)
}

export default NewPost; 