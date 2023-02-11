import loading from "../../../assets/loading.gif";

export let Preloader = () => {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%'
		}}>
			<img src={loading} alt="preloader"
				style={{ width: '300px', height: '300px', borderRadius: '50%' }} />
		</div>
	)
}