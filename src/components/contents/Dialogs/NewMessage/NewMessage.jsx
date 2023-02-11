import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../validations/validations';
import { Textarea } from '../../../common/FormsControls/FormsControls';

function NewMessage(props) {

	const onSubmit = (formData) => {
		props.addMessageTC(formData.new_mess);
	}

	return (
		<div className='form-post'>
			<NewMessageReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const maxLength5 = maxLengthCreator(5);

const NewMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="new_mess"
					component={Textarea}
					validate={[required, maxLength5]}
					placeholder='your news...' ></Field>
			</div>
			<div>
				<button className='form-post__button' >Add message</button>
			</div>
		</form >
	)
}

const NewMessageReduxForm = reduxForm({
	form: 'new_message'
})(NewMessageForm)

export default NewMessage; 