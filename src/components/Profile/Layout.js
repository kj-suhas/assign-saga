import React from 'react'
import Sidebar from '../ProfileItems/Sidebar'
import Main from './Main'

function Layout({ users, user }) {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar user={user} />
				<Main user={user} />
			</div>
		</div>
	)
}

export default Layout
