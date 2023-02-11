import { connect } from "react-redux"
import {
	toggleFollowThunkCreator,
	getUsersThunkCreator,
	updateUsersThunkCreator
} from "../../../redux/usersReducer"
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		isFollowing: state.usersPage.isFollowing,
	}
}

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChange = (pageNumber) => {
		this.props.updateUsersThunkCreator(pageNumber, this.props.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> :
					< Users onPageChange={this.onPageChange}
						currentPage={this.props.currentPage}
						users={this.props.users}
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						isFollowing={this.props.isFollowing}
						toggleFollowThunkCreator={this.props.toggleFollowThunkCreator} />}
			</>
		);
	}

}

export let UsersContainer = connect(mapStateToProps,
	{
		toggleFollowThunkCreator,
		getUsersThunkCreator,
		updateUsersThunkCreator
	}
)(UsersAPIComponent)