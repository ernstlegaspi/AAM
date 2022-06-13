import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Form from './components/form/form'
import Bottom from './components/bottom/bottom'
import Blogs from './components/blogs/blogs'
import BlogPage from './components/blog_page/blogPage'
import Navbar from './components/navbar/navbar'
import Login from './components/login/login'

import './css/app.css'

const App = () => {
	return(
		<div className="app-max-width">
			<BrowserRouter>
				{ window.location.pathname === "/" || window.location.pathname === "/login/" || window.location.pathname === "/login" ? null : <Navbar /> }
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/form/' element={<Form />} />
					<Route exact path='/blogs/' element={<Blogs />} />
					<Route exact path='/blogs/:title' element={<BlogPage />} />
					<Route exact path='/login/' element={<Login />} />
				</Routes>
				<Bottom />
			</BrowserRouter>
		</div>
	)
}

export default App