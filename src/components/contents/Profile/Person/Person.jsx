import s from './Person.module.css'

function Person(props) {
	return (
		<div className={s.person} key={props.profile.userId}>
			<div className={s.person__img}>
				<img src={props.profile.photos.large != null ? props.profile.photos.large : "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"} alt="" />
			</div>
			<div className={s.person__info}>
				<div className={s.person__name}>
					{props.profile.fullName}
				</div>
				<div className={s.person__about}>
					<p>{props.profile.lookingForAJob ? "Шукає роботу" : "Працює"}</p>
					<p>{props.profile.lookingForAJobDescription}</p>
					<p>Про мене:{props.profile.aboutMe}</p>
				</div>
			</div>
		</div>
	)
}

export default Person;