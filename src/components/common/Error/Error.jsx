import c from "./Error.module.css"

export const Error = (props) => {
	return (
		<div className={c.error}>{props.error}</div>
	)
}