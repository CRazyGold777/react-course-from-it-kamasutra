import s from './NewPost.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';

function NewPost(props) {

	const onSubmit = (formData) => {
		props.addPostTC(formData.my_post)
	}

	return (
		<div className={s['new-post']}>
			<div className={s['new-post__title']}>My posts</div>
			<div className='form-post'>
				<NewPostReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

const NewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div >
				<Field name='my_post' component={Textarea} className='form-post__input' type="text" placeholder='your news...' />
			</div>
			<div>
				<button className='form-post__button' >Add post</button>
			</div>
		</form>
	)
}

const NewPostReduxForm = reduxForm({
	form: "new_post"
})(NewPostForm)

export default NewPost; 