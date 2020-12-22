import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ({ users, login }) => {
	return (
		<div className='showcase'>
			<div className='container grid'>
				<div className='showcase-form card'>
					<div className='requestaccount'>
						<h2 className=''>Select an account</h2>
					</div>
					<div>
						<div className='users-container'>
							{users.map((user, index) => (
								<Link to={`/profile/${user.id}`} key={index}>
									<div onClick={() => login(user)} className='user flex-user'>
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
			</div>
		</div>
	)
}

export default Landing
