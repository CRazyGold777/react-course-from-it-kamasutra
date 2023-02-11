import { connect } from 'react-redux';
import { addPostTC } from '../../../../redux/profileReducer';
import NewPost from './NewPost';

const NewPostContainer = connect(null,
	{
		addPostTC,
	}
)(NewPost);

export default NewPostContainer; 