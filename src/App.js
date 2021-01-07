import React, { useState, useEffect } from 'react'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'

import Landing from './components/Landing'
import Layout from './components/Profile/Layout'
import Main2 from './components/Profile/Main2'

import './App.css'
import Sidebar from './components/ProfileItems/Sidebar'

const ComingSoon = ({ showModel, modelIsOpen }) => {
	return (
		<div className='profile'>
			<div className='col-lg-12 profile_container'>
				<Sidebar />
				<Main2 showModel={showModel} modelIsOpen={modelIsOpen} />
			</div>
		</div>
	)
}

function App() {
	const [modelIsOpen, setModelIsOpen] = useState(false)

	const showModel = value => {
		setModelIsOpen(value)
	}

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={() => <Landing />} />
					<Route
						exact
						path='/profile/:id'
						component={() => (
							<Layout modelIsOpen={modelIsOpen} showModel={showModel} />
						)}
					/>
					<Route
						exact
						path='/comingsoon'
						component={() => (
							<ComingSoon showModel={showModel} modelIsOpen={modelIsOpen} />
						)}
					/>
					<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	)
}

export default App
