import React from "react"
import { connect } from "react-redux"
import { logOutTC } from "../../redux/authReducer"

class LogOutClass extends React.Component {

	componentDidMount() {
		this.props.logOutTC()
	}

	render() {
		return <p>Ви вийшли з системи</p>
	}
}

export const LogOut = connect(null, { logOutTC })(LogOutClass)