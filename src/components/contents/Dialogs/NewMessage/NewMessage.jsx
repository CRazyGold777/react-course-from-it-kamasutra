import { connect } from 'react-redux';
import { addMessageTC } from '../../../../redux/dialogsReducer';
import { MessageForm } from '../../../common/MessageForm/MessageForm';

function NewMessage(props) {

	const onSubmit = (message) => {
		debugger
		props.addMessageTC(message);
	}

	return (
		<div className='form-post'>
			<MessageForm onSubmit={onSubmit} placeholder="your message..." button="Add message" />
		</div>
	)
}

export default connect(null, { addMessageTC }
)(NewMessage); 