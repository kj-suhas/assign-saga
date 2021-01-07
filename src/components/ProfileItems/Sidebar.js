import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { headerChange } from '../../actions/usersActions'

function Sidebar({ sidebarUser }) {
	return (
		<div className='col-lg-2 left-panel float-left'>
			<div className='side-menu'>
				<div className='menus card-new' id='should'>
					<ul style={{ marginTop: '230px' }}>
						<nav>
							<ul onClick={() => console.log('Profile')}>
								<li>
									<Link to={`/profile/${sidebarUser.id}`}>Profile</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => console.log('Posts')}>
								<li>
									<Link to='/comingsoon'>Posts</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => console.log('Gallery')}>
								<li>
									<Link to='/comingsoon'>Gallery</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => console.log('ToDo')}>
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

const mapStateToProps = state => ({
	sidebarUser: state.users.clickedUser,
	header: state.users.header,
})

export default connect(mapStateToProps, {})(Sidebar)
