import s from './Post.module.css'

function Post(props) {
	return (
		<div className={s["old-post"]} key={props.id}>
			<img className={s["old-post__avatar"]} src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt="" />
			<div className={s["old-post__text"]}>
				{props.message}
			</div>
		</div>
	)
}

export default Post;