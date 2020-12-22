import React from 'react'

function Main2() {
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
							src='https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							alt=''
						/>
						<h4>Lenne Graham</h4>
					</div>
				</div>
			</div>
			<h3>COMING SOON</h3>
		</div>
	)
}

export default Main2
