import './Header.css'
import { NavLink } from 'react-router-dom';

export function Header(props) {
	return (
		<div className='header'>
			<NavLink to="/"><img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="" /></NavLink>

			<NavLink to={"/" + props.href} className="login">{props.login}</NavLink>
		</div>
	)
}