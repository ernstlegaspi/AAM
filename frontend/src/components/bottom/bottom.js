import React from 'react'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'

import './css/bottom.css'

const Bottom = () => {
	return(
		<div className="bottom">
			<div className="bottom-label">
				<h2><a href="/">AAM</a></h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div className="bottom-contact">
				<p className="bottom-contact-labels">Contact Number:</p>
				<p className="bottom-contacts-contact">+6391237894564</p>
				<p className="bottom-contacts-contact">+6391237894564</p>
				<p className="bottom-contact-labels">Adress:</p>
				<p className="bottom-contacts-contact">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
			</div>
			<div className="bottom-socials">
				<Facebook className="bottom-socials-icon" />
				<Instagram className="bottom-socials-icon" />
				<Twitter className="bottom-socials-icon" />
			</div>
		</div>
	)
}

export default Bottom