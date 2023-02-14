import React, { useState } from "react"

export const ProfileStatusWithHocks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.putStatusProfileTC(status)
	}
	const onChangeStatus = (s) => {
		setStatus(s.currentTarget.value)
	}

	return <div>
		{!editMode ?
			<div>
				<span onClick={activateEditMode}>{props.status}</span>
			</div>
			:
			<div>
				<input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status} />
			</div>
		}
	</div >

}