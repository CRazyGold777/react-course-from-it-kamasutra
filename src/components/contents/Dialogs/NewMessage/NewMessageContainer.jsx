import { connect } from 'react-redux';
import { addMessageTC } from '../../../../redux/dialogsReducer';
import NewMessage from "./NewMessage"

const NewMessageContainer = connect(null,
	{
		addMessageTC
	}
)(NewMessage)

export default NewMessageContainer; 