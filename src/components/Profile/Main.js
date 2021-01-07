import React from 'react'
import { connect } from 'react-redux'

function Main({ currentUser, showModel }) {
	return (
		<div className='col-lg-10 right-panel float-right'>
			<div
				className='navbar'
				style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
			>
				<div className='container-fluid'>
					<div className='float-left'>
						<h2>Profile</h2>
					</div>

					<div
						onClick={() => showModel(true)}
						className='current-profile float-right flex'
						style={{ cursor: 'pointer' }}
					>
						<img
							style={{ width: '45px', height: '41px' }}
							src={currentUser.profilepicture}
							alt=''
						/>
						<h4>{currentUser.name}</h4>
					</div>
				</div>
			</div>
			<div className='col-lg-12'>
				<div
					className='col-lg-4 float-left'
					style={{ width: '435px', borderRight: '1px solid #ddd' }}
				>
					<div className='user-profile also-flex'>
						<div className='flex-item-1' style={{ margin: '0px' }}>
							<div style={{ textAlign: 'center' }}>
								<img src={currentUser.profilepicture} alt='' />
							</div>

							<div>
								<h2>{currentUser.name}</h2>
							</div>
						</div>
						<div className='flex-item-2'>
							<div className='user-info'>
								<ul className='ul_style'>
									<li>
										<div className='col-lg-12'>
											<div className='col-lg-4'>
												<span
													className='float-right'
													style={{ color: '#9A9A9A' }}
												>
													Username
													<span style={{ paddingLeft: '10px' }}>:</span>
												</span>
											</div>
											<div
												className='col-lg-8 pl-0'
												style={{ color: '545454' }}
											>
												<span
													className='float-left'
													style={{ color: '#545454' }}
												>
													{currentUser.username}
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className='col-lg-12'>
											<div className='col-lg-4'>
												<span
													className='float-right'
													style={{ color: '#9A9A9A' }}
												>
													e-mail
													<span style={{ paddingLeft: '10px' }}>:</span>
												</span>
											</div>
											<div className='col-lg-8 pl-0'>
												<span
													className='float-left'
													style={{ color: '#545454' }}
												>
													{currentUser.email}
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className='col-lg-12'>
											<div className='col-lg-4'>
												<span
													className='float-right'
													style={{ color: '#9A9A9A' }}
												>
													Phone
													<span style={{ paddingLeft: '10px' }}>:</span>
												</span>
											</div>
											<div className='col-lg-8 pl-0'>
												<span
													className='float-left'
													style={{ color: '#545454' }}
												>
													{currentUser.phone}
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className='col-lg-12'>
											<div className='col-lg-4'>
												<span
													className='float-right'
													style={{ color: '#9A9A9A' }}
												>
													Website
													<span style={{ paddingLeft: '10px' }}>:</span>
												</span>
											</div>
											<div className='col-lg-8 pl-0'>
												<span
													className='float-left'
													style={{ color: '#545454' }}
												>
													{currentUser.website}
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<hr />
						<div className='flex-item-3'>
							<h2 style={{ textAlign: 'center', color: '#ddd' }}>Company</h2>
							<ul className='ul_style'>
								<li>
									<div className='col-lg-12'>
										<div className='col-lg-4'>
											<span
												className='float-right'
												style={{ color: '#9A9A9A' }}
											>
												Name
												<span style={{ paddingLeft: '10px' }}>:</span>
											</span>
										</div>
										<div className='col-lg-8 pl-0'>
											<span className='float-left' style={{ color: '#545454' }}>
												{currentUser.company?.name}
											</span>
										</div>
									</div>
									{/* {user.company?.name} */}
								</li>
								<li>
									<div className='col-lg-12'>
										<div className='col-lg-4'>
											<span
												className='float-right'
												style={{ color: '#9A9A9A' }}
											>
												CatchPhrase
												<span style={{ paddingLeft: '10px' }}>:</span>
											</span>
										</div>
										<div className='col-lg-8 pl-0'>
											<span className='float-left' style={{ color: '#545454' }}>
												{currentUser.company?.catchPhrase}
											</span>
										</div>
									</div>
									{/*  */}
								</li>
								<li>
									<div className='col-lg-12'>
										<div className='col-lg-4'>
											<span
												className='float-right'
												style={{ color: '#9A9A9A' }}
											>
												bs
												<span style={{ paddingLeft: '10px' }}>:</span>
											</span>
										</div>
										<div className='col-lg-8 pl-0'>
											<span className='float-left' style={{ color: '#545454' }}>
												{currentUser.company?.bs}
											</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='col-lg-6 float-left' style={{ width: '50%' }}>
					<div>
						<div className='more-user-info'>
							<div className='still-user-info'>
								<div className='ul_style'>
									<ul style={{ marginLeft: '82px' }}>
										<li>
											<a
												style={{ marginLeft: '-42px' }}
												className='stayrightthere'
												href='
                                        /
                                        '
											>
												Address:
											</a>
											<ul>
												<li>
													<div className='col-lg-12'>
														<div className='col-lg-4'>
															<span
																className='float-right'
																style={{ color: '#9A9A9A' }}
															>
																Street
																<span style={{ paddingLeft: '10px' }}>:</span>
															</span>
														</div>
														<div className='col-lg-8 pl-0'>
															<span
																className='float-left'
																style={{ color: '#545454' }}
															>
																{currentUser?.address?.street}
															</span>
														</div>
													</div>
												</li>
											</ul>
											<ul>
												<li>
													<div className='col-lg-12'>
														<div className='col-lg-4'>
															<span
																className='float-right'
																style={{ color: '#9A9A9A' }}
															>
																Suit
																<span style={{ paddingLeft: '10px' }}>:</span>
															</span>
														</div>
														<div className='col-lg-8 pl-0'>
															<span
																className='float-left'
																style={{ color: '#545454' }}
															>
																{currentUser?.address?.suite}
															</span>
														</div>
													</div>
												</li>
											</ul>
											<ul>
												<li>
													<div className='col-lg-12'>
														<div className='col-lg-4'>
															<span
																className='float-right'
																style={{ color: '#9A9A9A' }}
															>
																City
																<span style={{ paddingLeft: '10px' }}>:</span>
															</span>
														</div>
														<div className='col-lg-8 pl-0'>
															<span
																className='float-left'
																style={{ color: '#545454' }}
															>
																{currentUser?.address?.city}
															</span>
														</div>
													</div>
												</li>
											</ul>
											<ul>
												<li>
													{/* <a href='/'>Zipcode: </a> {user?.address?.zipcode} */}
													<div className='col-lg-12'>
														<div className='col-lg-4'>
															<span
																className='float-right'
																style={{ color: '#9A9A9A' }}
															>
																Zipcode
																<span style={{ paddingLeft: '10px' }}>:</span>
															</span>
														</div>
														<div className='col-lg-8 pl-0'>
															<span
																className='float-left'
																style={{ color: '#545454' }}
															>
																{currentUser?.address?.zipcode}
															</span>
														</div>
													</div>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<div className='map'>
								<div className='the-map'>
									<img
										src='https://www.google.com/maps/d/thumbnail?mid=1bsq7KaRaZOa0El-KOZwSpPw1kms'
										alt=''
									/>
								</div>
							</div>
							<div style={{ width: '100%' }} className='latLong'>
								<span
									style={{
										float: 'right',
										padding: '5px 0px 5px 10px',
										position: 'relative',
										left: '128px',
										marginTop: '5px',
									}}
								>
									Long:{' '}
									<span style={{ fontWeight: '600' }}>
										{' '}
										{currentUser?.address?.geo.lng}
									</span>
								</span>
								<span
									style={{
										marginRight: '-120px',
										marginTop: '5px',
										float: 'right',
										padding: '5px 10px',
									}}
								>
									Lat:{' '}
									<span style={{ fontWeight: '600' }}>
										{currentUser?.address?.geo.lat}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div style={{ width: 100 + '%', float: 'right' }}>
					<button className='btn open-button' onclick={onclick}>
						Chat
					</button>

					<div className='chat-popup' id='myForm' style={{ display: 'none' }}>
						<form action='/action_page.php' className='form-container'>
							<div className='user flex-user flex'>
								<div>
									<img
										style={{ width: 30 + 'px', height: +30 + 'px' }}
										src='https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
										alt=''
									/>
								</div>
								<h4>Leanne Graham</h4>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.users.clickedUser,
})

export default connect(mapStateToProps, {})(Main)
