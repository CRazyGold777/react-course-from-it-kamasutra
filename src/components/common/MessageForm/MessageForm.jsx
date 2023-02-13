import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './MessageForm.module.css'
export const MessageForm = (props) => {
	const validator = values => {
		const errors = {};
		if (!values.new_mess) errors.new_mess = "Required"
		return errors;
	}
	return (
		<Formik
			initialValues={{ new_mess: '' }}
			validate={validator}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values.new_mess)
				setSubmitting(false)
			}}
		>
			{({ isSubmitting }) => (
				<Form className={style.form}>
					<div>
						<Field as="textarea" className={style.input} name="new_mess" placeholder={props.placeholder} ></Field>
						<ErrorMessage className={style.error} name="new_mess" component="div" />
					</div>
					<button type='submit' disabled={isSubmitting}>
						{props.button}
					</button>
				</Form>
			)}
		</Formik>
	)
}