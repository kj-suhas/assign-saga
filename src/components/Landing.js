import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../actions/usersActions'
import { useSelector, useDispatch } from 'react-redux'

const Landing = ({}) => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.items)
	const loading = useSelector(state => state.users.loading)
	const error = useSelector(state => state.users.error)

	console.log(users)
	console.log(loading)

	useEffect(() => {
		console.log('called')
		dispatch(getUsers())
	}, [])

	return (
		<div className='showcase'>
			<div className='container grid'>
				<div className='showcase-form card'>
					<div className='requestaccount'>
						<h2 style={{ color: '#545454' }}>Select an account</h2>
					</div>
					<div>
						<div className='users-container'>
							{users?.users?.map((user, index) => (
								<Link to={`/profile/${user.id}`} key={index}>
									<div
										onClick={() => console.log('login')}
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
										<div style={{ color: '#616161' }}>
											<h4>{user.name}</h4>
										</div>
										<hr />
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<svg id='wave' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='white'
					fill-opacity='1'
					d='M0,192L34.3,197.3C68.6,203,137,213,206,181.3C274.3,149,343,75,411,80C480,85,549,171,617,176C685.7,181,754,107,823,101.3C891.4,96,960,160,1029,192C1097.1,224,1166,224,1234,213.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
				></path>
			</svg>
		</div>
	)
}

export default Landing
