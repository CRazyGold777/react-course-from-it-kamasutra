import s from './Message.module.css'

function Message(props) {

	return (
		<div className={s.message}>
			<div className={s.person}>
				<img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" />
				<div className={s.name}>{props.name}</div>
			</div>
			<div className={s.text}>
				{props.text}
			</div>
		</div>
	)
}

export default Message;