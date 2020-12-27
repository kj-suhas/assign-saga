import React from 'react'
import Sidebar from '../ProfileItems/Sidebar'
import Main from './Main'
import Model from '../ProfileItems/Model'

function Layout({
	users,
	user,
	loginFromModel,
	modelIsOpen,
	showModel,
	changeHeader,
}) {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar user={user} changeHeader={changeHeader} />
				<Main user={user} showModel={showModel} changeHeader={changeHeader} />
				<Model
					user={user}
					users={users}
					loginFromModel={loginFromModel}
					modelIsOpen={modelIsOpen}
					showModel={showModel}
				/>
			</div>
		</div>
	)
}

export default Layout
