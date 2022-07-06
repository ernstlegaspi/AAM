import React, { useState } from 'react'
import Filebase from 'react-file-base64'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { addBlog } from '../../actions/blog'
import "./css/form.css"

const Form = () => {
	const [getFormData, setFormData] = useState({ title: '', description: '', image: '' })
	const dispatch = useDispatch()
	
	const handleSubmit = e => {
		e.preventDefault()

		dispatch(addBlog(getFormData))
	}
	
	return(
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Title' name="title"  onChange={e => setFormData({ ...getFormData, title: e.target.value })} /><br /><br />
				<textarea name="description" placeholder="Description" onChange={e => setFormData({ ...getFormData, description: e.target.value })}></textarea><br /><br />
				<Filebase onDone={({ base64 }) => setFormData({ ...getFormData, image: base64 })} /><br /><br />
				<Button className="form-button" variant="outlined" type="submit">Submit</Button>
			</form>
		</div>
	)
}

export default Form