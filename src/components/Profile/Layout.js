import React from 'react'
import Sidebar from '../ProfileItems/Sidebar'
import Main from './Main'
import Model from '../ProfileItems/Model'

function Layout() {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar />
				<Main />
				<Model />
			</div>
		</div>
	)
}

export default Layout
