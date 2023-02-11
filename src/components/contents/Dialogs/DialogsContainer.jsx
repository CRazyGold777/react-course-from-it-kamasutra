import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect } from '../../../hoc/AuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose(
	connect(mapStateToProps, {}),
	AuthRedirect,
)(Dialogs);