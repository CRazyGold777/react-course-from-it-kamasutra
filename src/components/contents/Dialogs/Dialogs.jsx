import s from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import Human from './Human/Human'
import React from 'react';
import NewMessageContainer from './NewMessage/NewMessageContainer';


function Dialogs(props) {

	let humans = props.dialogsPage.people.map(h => <Human name={h.name} id={h.id} />)
	let message = props.dialogsPage.messages.map(h => <Message name={h.name} text={h.text} />)

	return (
		<div className={s.dialogs}>
			<div className={s.people}>
				<h1 className={s.title}>dialogs</h1>
				<div className={s.humans}>
					{humans}
				</div>
			</div>
			<div className={s.messages}>
				<div>
					{message}
				</div>
				<div className={s.new_message}>
					<NewMessageContainer />
				</div>
			</div>
		</div>
	)
}

export default Dialogs;