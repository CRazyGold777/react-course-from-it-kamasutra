import { NavLink } from 'react-router-dom';
import s from './Human.module.css'

function Human(props) {
	return (
		<NavLink to={"/dialogs/" + props.id} className={s.human}>{props.name}</NavLink>
	)
}
export default Human;