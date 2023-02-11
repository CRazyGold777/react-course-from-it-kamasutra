import c from "./Users.module.css"
import { NavLink } from 'react-router-dom'

export let Users = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= pageCount; i++) {
		if (i === 21) break
		pages.push(i)
	}

	return (
		<div className={c.users}>
			<div className={c.pages}>
				{
					pages.map(p =>
						<button onClick={() => {
							props.onPageChange(p)
						}}
							className={p === props.currentPage ? c.selected : undefined}>
							{p}
						</button>)
				}
			</div>
			{
				props.users.map(u => {

					return (
						<div>
							<div className={c['user']} key={u.id}>
								<div className={c['user__action']}>
									<NavLink className={c['a_user']} to={"/profile/" + u.id}><img className={c['user__icon']}
										src={u.photos.small == null ? "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" : u.photos.small}
										alt="icon" /></NavLink>
									<button disabled={props.isFollowing} onClick={() => { props.toggleFollowThunkCreator(u) }}
										className={c['user__follow']}>
										{u.followed ? 'Unfollow' : 'Follow'}
									</button>
								</div>
								<div className={c['user__info']}>
									<div className={c['user__column']}>
										<div className={c['user__name']}>{u.name}</div>
										<div className={c['user__phrase']}>{u.status}</div>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)

}