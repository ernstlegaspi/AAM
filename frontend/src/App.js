import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Form from './components/form/form'
import Bottom from './components/bottom/bottom'
import Blogs from './components/blogs/blogs'
import BlogPage from './components/blog_page/blogPage'
import Navbar from './components/navbar/navbar'
import SavedBlogs from './components/saved_blogs/savedBlogs'
import Page404 from './components/errorPage/errorPage'

import './css/app.css'

const App = () => {
	const token = JSON.parse(localStorage.getItem(`profile`))

	return(
		<div className="app-max-width">
			<BrowserRouter>
				{ window.location.pathname === "/" ? null : <Navbar /> }
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/form/' element={<Form />} />
					<Route exact path='/blogs/' element={<Blogs />} />
					<Route exact path='/blogs/:title' element={<BlogPage />} />
					{ token ? <Route exact path='/saved-blogs/' element={<SavedBlogs />} /> : null }
					<Route path="/*" element={<Page404 />} />
				</Routes>
				<Bottom />
			</BrowserRouter>
		</div>
	)
}

export default App