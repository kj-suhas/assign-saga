import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

const Model = ({ user, users, loginFromModel, modelIsOpen, showModel }) => {
	const finalNewUsers = []

	users.forEach(newUser => {
		if (newUser.id !== user.id) {
			finalNewUsers.push(newUser)
		}
	})

	// console.log(finalNewUsers)

	// console.log(newUsers, exceptCurrentUser)

	// const $

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
													src={user.profilepicture}
													alt=''
												/>
											</div>

											<div id='namecard' style={{ fontSize: '24px' }}>
												<h2
													style={{
														position: 'relative',
														fontSize: '19px',
														color: '#9A9A9A',
														fontWeight: 'bold',
													}}
												>
													{user.name}
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div style={{ textAlign: 'center' }} className='flex-item-2'>
								<div className='user-info'>
									<ul className='ul_style'>
										<li>{user.website}</li>
									</ul>
								</div>
							</div>
							<div className='users-model-container'>
								{finalNewUsers.map(user => (
									<Link to={`/profile/${user.id}`} key={user.id}>
										<div
											onClick={() => {
												loginFromModel(user)
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

				{/* <Link to='/'>
					<div className='signOut'>
						<button
							onClick={() => {
								// $('.modal-fadeIn').removeClass('modal-fadeIn')
							}}
							type='button'
							style={{
								borderRadius: '50px',
								backgroundColor: '#d9534f',
							}}
							className='btn btn-danger close'
							// data-dismiss='modal'
							aria-hidden='true'
						>
							Signout
						</button>
					</div>
				</Link> */}
			</Modal>
		</div>
	)
}

export default Model
