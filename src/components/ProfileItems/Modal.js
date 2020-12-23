import React from 'react'
import { Link } from 'react-router-dom'

const Modal = ({ user }) => {
	console.log(user)
	return (
		<div
			class='modal fade'
			id='exampleModal'
			tabindex='-1'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
		>
			<div class='modal-dialog' role='document'>
				<div class='modal-content'>
					<div class='modal-header'>
						<h5 class='modal-title' id='exampleModalLabel'>
							<div className='profile'>
								<div className='col-lg-12 profile_container'>
									<div className='col-lg-12 right-panel float-right'>
										<div className='col-lg-12'>
											<div
												className='col-lg-12 float-left'
												style={{ borderBottom: '1px solid #ddd' }}
											>
												<div className='user-profile also-flex'>
													<div
														className='flex-item-1'
														style={{ margin: '0px' }}
													>
														<div style={{ textAlign: 'center' }}>
															<img src={user.profilepicture} alt='' />
														</div>

														<div>
															<h2>{user.name}</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											style={{ textAlign: 'center' }}
											className='flex-item-2'
										>
											<div className='user-info'>
												<ul className='ul_style'>
													<li>{user.website}</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</h5>
						<Link to={'/'}>
							<button
								onClick={() => {}}
								type='button'
								style={{
									borderRadius: '50px',
									backgroundColor: '#d9534f',
								}}
								class='btn btn-danger'
								// data-dismiss='modal'
							>
								Signout
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
