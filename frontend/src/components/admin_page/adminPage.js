import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Filebase from 'react-file-base64'

import './css/adminPage.css'
import { adminLogin } from '../../actions/auth'
import { addBlog } from '../../actions/blog'

const AdminPage = () => {
	const [getData, setData] = useState({ username: '', password: '' })
	const [getFormData, setFormData] = useState({ title: '', description: '', image: '' })
	const dispatch = useDispatch()
	const token = JSON.parse(localStorage.getItem(`admin`))

	const handleSubmit = e => {
		e.preventDefault()

		dispatch(adminLogin(getData))
	}

	const submitData = e => {
		e.preventDefault()

		dispatch(addBlog(getFormData))
	}
	
	const handleSetData = e => setData({ ...getData, [e.target.name]: e.target.value })

	const handleSetFormData = e => setFormData({ ...getFormData, [e.target.name]: e.target.value })
	
	return(
		<>
			{
				token ? <form className="admin-page" onSubmit={submitData}>
					<TextField label="Title" variant="outlined" name="title" onChange={handleSetFormData} /> <br /><br />
					<TextField label="Description" variant="outlined" name="description" onChange={handleSetFormData} /><br /><br />
					<Filebase onDone={({ base64 }) => setFormData({ ...getFormData, image: base64 })} /> <br /><br />
					<Button type='submit' variant="outlined">Submit</Button>
				</form>
				: <form className="admin-page" onSubmit={handleSubmit}>
					<TextField label="Username" variant="outlined" name="username" onChange={handleSetData} /> <br /><br />
					<TextField label="Password" type="password" variant="outlined" name="password" onChange={handleSetData} /><br /><br />
					<Button type='submit' variant="outlined">Submit</Button>
				</form>
			}
		</>
	)
}

export default AdminPage