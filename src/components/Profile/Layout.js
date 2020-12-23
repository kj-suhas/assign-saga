import React from 'react'
import Sidebar from '../ProfileItems/Sidebar'
import Main from './Main'
import Modal from '../ProfileItems/Modal'

function Layout({ users, user }) {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar user={user} />
				<Main user={user} />
				<Modal user={user} />
			</div>
		</div>
	)
}

export default Layout
