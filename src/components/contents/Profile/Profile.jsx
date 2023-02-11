import s from './Profile.module.css'
import Person from './Person/Person';
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

function Profile(props) {
	let postsJsx = props.myPosts.map(p => <Post id={p.id} message={p.post} />)

	return (
		<div className={s.profile} >
			<img className={s.profile__img} src="https://lh6.googleusercontent.com/4FNvPCtwGSKRJwT-Dz8x8ZGTXEmo1WjmKUh7oIbmqyOcjDcGP-zNPWI2Y8LAQdNEGtJ6l1zUCeMXI4ax2ZB0qu-PCVVFzgFrFvImBxmdVR1-wmMnN-NG7MCcp8Euj_BVDOhJFLQM" alt="" />
			<div className={s.profile__person}>
				<Person profile={props.profile} />
			</div>
			<div className={s.profile__status}>
				<ProfileStatus status={props.status} putStatusProfileTC={props.putStatusProfileTC} />
			</div>
			<div className={s['profile__new-post']}>
				<NewPostContainer />
			</div>
			<div className={s["profile__old-posts"]}>
				{postsJsx}
			</div>
		</div>
	)
}
export default Profile;