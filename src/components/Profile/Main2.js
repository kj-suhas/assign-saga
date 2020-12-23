import React from 'react'

function Main2({ user }) {
	return (
		<div className='col-lg-10 right-panel float-right final-h3'>
			<div
				className='navbar'
				style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
			>
				<div className='container-fluid'>
					<div className='float-left'>
						<h2>Profile</h2>
					</div>

					<div className='current-profile float-right flex'>
						<img
							style={{ width: '30px', height: '30px' }}
							src={user.profilepicture}
							alt=''
						/>
						<h4>{user.name}</h4>
					</div>
				</div>
			</div>
			<h3>COMING SOON</h3>
		</div>
	)
}

export default Main2
