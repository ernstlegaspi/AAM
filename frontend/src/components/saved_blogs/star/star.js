import React from 'react'
import { Star } from '@material-ui/icons'
import { useDispatch } from 'react-redux'

import './css/star.css'
import { deleteSavedBlog } from '../../../actions/blog'

const StarIcon = ({ blog }) => {
	const dispatch = useDispatch()

	const starClick = () => {
		dispatch(deleteSavedBlog(blog._id))
	}

	return(
		<Star onClick={() => starClick()} className="star" />
	)
}

export default StarIcon