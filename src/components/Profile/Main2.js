import React from 'react'
import Model from '../ProfileItems/Model'

function Main2({
	user,
	showModel,
	header,
	users,
	loginFromModel,
	modelIsOpen,
}) {
	return (
		<div className='col-lg-10 right-panel float-right final-h3'>
			<div
				className='navbar'
				style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
			>
				<div className='container-fluid'>
					<div className='float-left'>
						<h2>{header}</h2>
					</div>

					<div
						onClick={() => showModel(true)}
						className='current-profile float-right flex'
					>
						<img
							style={{ width: '43px', height: '38px' }}
							src={user.profilepicture}
							alt=''
						/>
						<h4>{user.name}</h4>
					</div>
				</div>
			</div>
			<h3>COMING SOON</h3>
			<Model
				showModel={showModel}
				user={user}
				users={users}
				loginFromModel={loginFromModel}
				modelIsOpen={modelIsOpen}
			/>
		</div>
	)
}

export default Main2
