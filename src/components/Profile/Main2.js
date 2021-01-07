import React from 'react'
import Model from '../ProfileItems/Model'
import { connect } from 'react-redux'
// import { loginUser } from '../../actions/usersActions'

function Main2({ main2User, showModel, header, modelIsOpen }) {
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
							src={main2User.profilepicture}
							alt=''
						/>
						<h4>{main2User.name}</h4>
					</div>
				</div>
			</div>
			<h3>COMING SOON</h3>
			<Model showModel={showModel} modelIsOpen={modelIsOpen} />
		</div>
	)
}

const mapStateToProps = state => ({
	main2User: state.users.clickedUser,
	main2Users: state.users.items.users,
	header: state.users.header,
})

export default connect(mapStateToProps, {})(Main2)
