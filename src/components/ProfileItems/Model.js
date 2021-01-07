import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { connect } from 'react-redux'
// import { loginUser } from '../../actions/usersActions'

const Model = ({
	modelUser,
	modelUsers,
	modelIsOpen,
	showModel,
	loginUser,
}) => {
	const finalNewUsers = []
	modelUsers?.forEach(newUser => {
		if (newUser.id !== modelUser.id) {
			finalNewUsers.push(newUser)
		}
	})

	return (
		<div className='what'>
			<Modal
				isOpen={modelIsOpen}
				onRequestClose={() => showModel(false)}
				className='modal_class'
			>
				<div className='profile profileModal'>
					<div className='col-lg-12 profile_container'>
						<div className='col-lg-12 right-panel float-right'>
							<div className='col-lg-12'>
								<div
									className='col-lg-12 float-left'
									style={{ borderBottom: '1px solid #ddd' }}
								>
									<div className='user-profile also-flex'>
										<div className='flex-item-1' style={{ margin: '0px' }}>
											<div style={{ textAlign: 'center' }}>
												<img
													style={{
														position: 'relative',
														left: '-5px',
														width: '99px',
														height: '90px',
													}}
													src={modelUser.profilepicture}
													alt=''
												/>
											</div>

											<div id='namecard' style={{ fontSize: '24px' }}>
												<h2
													style={{
														position: 'relative',
														fontSize: '19px',
														fontWeight: 'bold',
													}}
												>
													{modelUser.name}
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								style={{ textAlign: 'center', color: '#9A9A9A' }}
								className='flex-item-2'
							>
								<div className='user-info'>
									<ul className='ul_style'>
										<li>{modelUser.website}</li>
									</ul>
								</div>
							</div>
							<div className='users-model-container'>
								{finalNewUsers.map(user => (
									<Link to={`/profile/${user.id}`} key={user.id}>
										<div
											onClick={() => {
												loginUser(user)
												showModel(false)
											}}
											className='user flex-user'
										>
											<div>
												<img
													width='30px'
													height='30px'
													src={user.profilepicture}
													alt=''
												/>
											</div>
											<div>
												<h4>{user.name}</h4>
											</div>
											<hr />
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* signout */}
					<div>
						<Link to='/'>
							<button
								onClick={() => showModel(false)}
								className='btn button-danger'
							>
								Signout
							</button>
						</Link>
					</div>
				</div>
			</Modal>
		</div>
	)
}

const mapStateToProps = state => ({
	modelUsers: state.users.items.users,
	modelUser: state.users.clickedUser,
})

export default connect(mapStateToProps, {})(Model)
