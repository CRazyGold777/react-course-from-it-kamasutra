import { NavLink } from 'react-router-dom';
import './Menu.css'

function Menu() {
	return (
		<div className='menu'>
			<ul className='menu__items'>
				<li className='menu__item'><NavLink to="/profile">Profile</NavLink></li>
				<li className='menu__item'><NavLink to="/dialogs">Dialogs</NavLink></li>
				<li className='menu__item'><NavLink to="/users">Users</NavLink></li>
				{/* <li className='menu__item'><a href="#">News</a></li>
				<li className='menu__item'><a href="#">Music</a></li>
				<li className='menu__item'><a href="#">Setting</a></li> */}
			</ul>
		</div>
	);
}
export default Menu;