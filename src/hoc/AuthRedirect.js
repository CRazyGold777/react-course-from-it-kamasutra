import React from "react";
import { connect } from "react-redux";
// import { Login } from "../components/Login/Login";
import { Navigate } from 'react-router-dom'

export const AuthRedirect = (Component) => {
	const mapStateToProps = (state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}
	function RedirectComponent(props) {
		if (!props.isAuth) return <Navigate replace to="/login" />
		return <Component {...props} />
	}
	return connect(mapStateToProps, {})(RedirectComponent)
}