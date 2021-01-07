import React from 'react'
import Sidebar from '../ProfileItems/Sidebar'
import Main from './Main'
import Model from '../ProfileItems/Model'

function Layout({ modelIsOpen, showModel }) {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar />
				<Main showModel={showModel} />
				<Model modelIsOpen={modelIsOpen} showModel={showModel} />
			</div>
		</div>
	)
}

export default Layout
