import React from 'react'
import { Link } from 'react-router-dom'
import { headerChange } from '../../actions/usersActions'
import { useSelector, useDispatch } from 'react-redux'

function Sidebar() {
	const sidebarUser = useSelector(state => state.users.clickedUser)

	const dispatch = useDispatch()

	return (
		<div className='col-lg-2 left-panel float-left'>
			<div className='side-menu'>
				<div className='menus card-new' id='should'>
					<ul style={{ marginTop: '230px' }}>
						<nav>
							<ul onClick={() => console.log('called')}>
								<li>
									<Link to={`/profile/${sidebarUser.id}`}>Profile</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => dispatch(headerChange('Posts'))}>
								<li>
									<Link to='/comingsoon'>Posts</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => dispatch(headerChange('Gallery'))}>
								<li>
									<Link to='/comingsoon'>Gallery</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => dispatch(headerChange('ToDo'))}>
								<li>
									<Link to='/comingsoon'>ToDo</Link>
								</li>
							</ul>
							<hr />
						</nav>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
