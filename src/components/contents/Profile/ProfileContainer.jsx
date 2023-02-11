import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	setProfile,
	updateFetching,
	setProfileThunkCreator,
	putStatusProfileTC
} from '../../../redux/profileReducer'
import { Preloader } from "../../common/Preloader/Preloader";
import { AuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		isFetching: state.profilePage.isFetching,
		myPosts: state.profilePage.myPosts,
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authMe: state.auth.data.id,
	}
}

class ProfileContainerClass extends React.Component {

	componentDidMount() {
		if (this.props.me) {
			this.props.setProfileThunkCreator(this.props.authMe)
		}
		else this.props.setProfileThunkCreator(this.props.userId)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> :
					<Profile profile={this.props.profile}
						myPosts={this.props.myPosts}
						status={this.props.status}
						putStatusProfileTC={this.props.putStatusProfileTC} />}
			</>
		)
	}
}

const Location = (props) => {
	return (
		<ProfileContainerClass userId={useParams().userId} {...props} />
	)
}

export const ProfileContainer = compose(
	connect(mapStateToProps,
		{
			setProfile,
			updateFetching,
			setProfileThunkCreator,
			putStatusProfileTC
		}
	),
	AuthRedirect
)(Location)