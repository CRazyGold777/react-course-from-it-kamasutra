import { connect } from "react-redux";
import { Header } from "./Header";
import React from "react";

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.data.login,
	}
}

class HeaderClass extends React.Component {

	render() {
		return (
			this.props.isAuth ? <Header login={this.props.login} href="log_out" />
				: <Header login="Login" href="login" />
		)
	}
}

export let HeaderContainer = connect(mapStateToProps, {})(HeaderClass)