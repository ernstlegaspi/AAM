import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Form from './components/form/form'
import Bottom from './components/bottom/bottom'
import Blogs from './components/blogs/blogs'

import './css/app.css'

const App = () => {
	useEffect(() => {
		
	})
	
	return(
		<div className="app-max-width">
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/form/' element={<Form />} />
					<Route exact path='/blogs/' element={<Blogs />} />
				</Routes>
				<Bottom />
			</BrowserRouter>
			<div id="blackbg"></div>
		</div>
	)
}

export default App