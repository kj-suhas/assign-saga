import React from 'react'
import Model from '../ProfileItems/Model'
import { useSelector, useDispatch } from 'react-redux'
import { showModel } from '../../actions/usersActions'

function Main2() {
	const main2User = useSelector(state => state.users.clickedUser)
	const header = useSelector(state => state.users.header)

	const dispatch = useDispatch()

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
						onClick={() => dispatch(showModel(true))}
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
			<Model />
		</div>
	)
}

export default Main2
