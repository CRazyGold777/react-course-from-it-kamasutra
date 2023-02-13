import { connect } from "react-redux"
import {
	toggleFollowThunkCreator,
	getUsersThunkCreator,
	updateUsersThunkCreator
} from "../../../redux/usersReducer"
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";
import { getCurrentPage, getPageSize, getTotalUsersCount, getUsers, isFollowingButtonDisable, isUsersPageFetching } from "../../../selectors/selector-users";

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: isUsersPageFetching(state),
		isFollowing: isFollowingButtonDisable(state),
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