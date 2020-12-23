import React from 'react'

function Main({ user, users }) {
	const onclick = () => {
		console.log('chat')
		let toggleChat = document.getElementById('myForm')
		if (toggleChat.style.display === 'none') {
			toggleChat.style.display = 'block'
		} else {
			toggleChat.style.display = 'none'
		}
	}

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
						className='current-profile float-right flex'
						data-toggle='modal'
						data-target='#exampleModal'
					>
						<img
							style={{ width: '30px', height: '30px' }}
							src={user.profilepicture}
							alt=''
						/>
						<h4>{user.name}</h4>
					</div>
				</div>
			</div>
			<div className='col-lg-12'>
				<div
					className='col-lg-4 float-left'
					style={{ borderRight: '1px solid #ddd' }}
				>
					<div className='user-profile also-flex'>
						<div className='flex-item-1' style={{ margin: '0px' }}>
							<div style={{ textAlign: 'center' }}>
								<img src={user.profilepicture} alt='' />
							</div>

							<div>
								<h2>{user.name}</h2>
							</div>
						</div>
						<div className='flex-item-2'>
							<div className='user-info'>
								<ul className='ul_style'>
									<li>
										<a href='/'>Username: </a> {user.username}
									</li>
									<li>
										<a href='/'>e-mail: </a> {user.email}
									</li>
									<li>
										<a href='/'>Phone: </a> {user.phone}
									</li>
									<li>
										<a href='/'>Website: </a> {user.website}
									</li>
								</ul>
							</div>
						</div>
						<hr />
						<div className='flex-item-3'>
							<h2 style={{ textAlign: 'center', color: '#ddd' }}>Company</h2>
							<ul className='ul_style'>
								<li>
									<a href='/'>Name: </a>
									{user.company?.name}
								</li>
								<li>
									<a href='/'>catchphrase: </a>
									{user.company?.catchPhrase}
								</li>
								<li>
									<a href='/'>bs: </a>
									{user.company?.bs}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='col-lg-6 float-left'>
					<div>
						<div className='more-user-info'>
							<div className='still-user-info'>
								<div className='ul_style'>
									<ul>
										<li>
											<a
												href='
                                        /
                                        '
											>
												Address:
											</a>
											<ul>
												<li>
													<a href='/'>Street: </a>
													{user?.address?.street}
												</li>
											</ul>
											<ul>
												<li>
													<a href='/'>Suite: </a>
													{user?.address?.suite}
												</li>
											</ul>
											<ul>
												<li>
													<a href='/'>City: </a>
													{user?.address?.city}
												</li>
											</ul>
											<ul>
												<li>
													<a href='/'>Zipcode: </a> {user?.address?.zipcode}
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
						</div>
					</div>
				</div>
				<div style={{ width: '100%', float: 'right' }}>
					<button className='btn open-button' onclick={onclick}>
						Chat
					</button>

					<div className='chat-popup' id='myForm' style={{ display: 'none' }}>
						<form action='/action_page.php' className='form-container'>
							<div className='user flex-user flex'>
								<div>
									<img
										style={{ width: '30px', height: '30px' }}
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

export default Main
