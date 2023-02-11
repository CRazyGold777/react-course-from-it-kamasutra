import { Field, reduxForm } from "redux-form"
import c from "./Login.module.css"
import { connect } from 'react-redux';
import { loginTC } from "../../redux/authReducer";
import { Input } from "../common/FormsControls/FormsControls"
import { required } from "../../validations/validations";
import { Error } from "../common/Error/Error";

export const Login = connect(null, { loginTC })(FunLogin)

function FunLogin(props) {
	const onSubmit = (formData) => {
		props.loginTC(formData.login, formData.password, formData.remember_me)
	}

	return (
		<div className={c.login}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={c.form}>
			<div>
				<Field name="login"
					placeholder="Login"
					component={Input}
					validate={[required]} />
			</div>
			<div>
				<Field name="password"
					placeholder="Password"
					component={Input}
					validate={[required]} />
			</div>
			<div className={c.checkbox}>
				<Field name="remember_me"
					type="checkbox"
					component="input" />
				<span>Remember me</span>
			</div>
			{props.error && <Error error={props.error} />}
			<div>
				<button className={c.button}>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

