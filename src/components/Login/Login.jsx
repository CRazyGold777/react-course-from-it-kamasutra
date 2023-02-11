// import { Field, reduxForm } from "redux-form"
import c from "./Login.module.css"
import { connect } from 'react-redux';
import { loginTC } from "../../redux/authReducer";
import { Input } from "../common/FormsControls/FormsControls"
import { Error } from "../common/Error/Error";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const mapStateToProps = (state) => {
	return {
		error: state.auth.error
	}
}

export const Login = connect(mapStateToProps, { loginTC })(FunLogin)

function FunLogin(props) {
	const onSubmit = (formData) => {
		props.loginTC(formData.email, formData.password, formData.remember_me)
	}

	return (
		<div className={c.login}>
			<h1>Login</h1>
			<LoginForm onSubmit={onSubmit} error={props.error} />
		</div>
	)
}

const validator = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}
	else if (!values.password) {
		errors.password = 'Required';
	}
	return errors;
}

const LoginForm = (props) => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validator}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values)
				setSubmitting(false)
			}}
		>
			{({ isSubmitting }) => (
				<Form className={c.form}>
					<div>
						<Field type="email" name="email" placeholder="Login" />
						<ErrorMessage name="email" component="div" />
					</div>
					<div>
						<Field type="password" name="password" placeholder="Password" />
						<ErrorMessage name="password" component="div" />
					</div>
					<div className={c.checkbox}>
						<Field name="remember_me"
							type="checkbox"
							component="input" />
						<span>Remember me</span>
					</div>
					{props.error && <Error error={props.error} />}
					<button type="submit" disabled={isSubmitting} className={c.button}>Login
					</button>
				</Form>
			)}
		</Formik>
	)
}


// const LoginForm = (props) => {
// 	return (
// 		<form onSubmit={props.handleSubmit} className={c.form}>
// 			<div>
// 				<Field name="login"
// 					placeholder="Login"
// 					component={Input}
// 					validate={[required]} />
// 			</div>
// 			<div>
// 				<Field name="password"
// 					placeholder="Password"
// 					component={Input}
// 					validate={[required]} />
// 			</div>
// 			<div className={c.checkbox}>
// 				<Field name="remember_me"
// 					type="checkbox"
// 					component="input" />
// 				<span>Remember me</span>
// 			</div>
// 			{props.error && <Error error={props.error} />}
// 			<div>
// 				<button className={c.button}>Login</button>
// 			</div>
// 		</form>
// 	)
// }

// const LoginReduxForm = reduxForm({
// 	form: 'login'
// })(LoginForm)

