import React, { useState } from 'react'
import Filebase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import { addBlog } from '../../actions/blog'

const Form = () => {
	const [getFormData, setFormData] = useState({ title: '', description: '', image: '' })
	const dispatch = useDispatch()
	
	const handleSubmit = e => {
		e.preventDefault()

		dispatch(addBlog(getFormData))
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<input type="text" name="title" placeholder="Title" onChange={e => setFormData({ ...getFormData, title: e.target.value })} /> <br />
			<input type="text" name="description" placeholder="Description" onChange={e => setFormData({ ...getFormData, description: e.target.value })} /> <br />
			<Filebase onDone={({ base64 }) => setFormData({ ...getFormData, image: base64 })} />
			<input type="submit" value="Submit" />
		</form>
	)
}

export default Form