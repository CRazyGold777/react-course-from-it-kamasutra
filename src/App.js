import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'
import DialogsContainer from './components/contents/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProfileContainer } from './components/contents/Profile/ProfileContainer';
import { UsersContainer } from './components/contents/Users/UsersContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import { LogOut } from './components/LogOut/LogOut';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.init) return <Preloader />
		return (
			<BrowserRouter
				basename='/' >
				<div className='wrapper'>
					<header className='wrapper__header'>
						<HeaderContainer />
					</header>
					<nav className='wrapper__nav'>
						<Menu />
					</nav>
					<div className='wrapper__content'>
						<Routes>
							<Route path='/' element={<></>} />
							<Route path='/profile' element={
								<ProfileContainer me={true} />
							} />
							<Route path='/profile/:userId' element={<ProfileContainer />} />

							<Route path='/dialogs/' element={
								<DialogsContainer />
							} />
							<Route path='/dialogs/:userId' element={
								<DialogsContainer />
							} />
							<Route path='/users/' element={
								<UsersContainer />
							} />
							<Route path='/log_out' element={
								<LogOut />
							} />
							<Route path='/login/' element={<Login />} />
						</Routes>
					</div>
					<div className='wrapper__footer'>
						<Footer />
					</div>
				</div >
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		init: state.app.initialized,
	}
}

export default connect(mapStateToProps, { initializeApp })(App);
