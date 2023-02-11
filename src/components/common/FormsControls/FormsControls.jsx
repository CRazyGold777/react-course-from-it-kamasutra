import c from "./FormControls.module.css"

export const Textarea = ({ input, meta, ...props }) => {
	return (
		<div className={c.formControl}>
			<textarea className={meta.touched && meta.error ? c.error : null}
				{...props}{...input}></textarea>
			{meta.touched && (meta.error && <span>{meta.error}</span>)}
		</div>
	)
}
export const Input = ({ input, meta, ...props }) => {
	return (
		<div className={c.formControl}>
			<input lassName={meta.touched && meta.error ? c.error : null}
				{...props}{...input} />
			{meta.touched && (meta.error && <span>{meta.error}</span>)}
		</div>
	)
}