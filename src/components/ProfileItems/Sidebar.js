import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ user, changeHeader }) {
	return (
		<div class='col-lg-2 left-panel float-left'>
			<div class='side-menu'>
				<div class='menus card-new'>
					<ul style={{ marginTop: '230px' }}>
						<nav>
							<ul onClick={() => changeHeader('Profile')}>
								<li>
									<Link to={`/profile/${user.id}`}>Profile</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => changeHeader('Posts')}>
								<li>
									<Link to='/comingsoon'>Posts</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => changeHeader('Gallery')}>
								<li>
									<Link to='/comingsoon'>Gallery</Link>
								</li>
							</ul>
							<hr />
							<ul onClick={() => changeHeader('ToDo')}>
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
