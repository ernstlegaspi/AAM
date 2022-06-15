import React, { useState } from 'react'
import { Star, StarBorderOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'

import './css/star.css'
import { addSavedBlog, deleteSavedBlog } from '../../../../actions/blog'

const StarIcon = ({ blog }) => {
	const dispatch = useDispatch()
	const [getStar, setStar] = useState(false)

	const starClick = () => {
		setStar(false)
		dispatch(deleteSavedBlog(blog._id))
	}

	const starOutlinedClick = () => {
		setStar(true)
		dispatch(addSavedBlog(blog))
	}
	
	return(
		<>
			{ getStar ? <Star onClick={() => starClick()} className="star" /> : <StarBorderOutlined onClick={() => starOutlinedClick()} className="star" /> }
		</>
	)
}

export default StarIcon