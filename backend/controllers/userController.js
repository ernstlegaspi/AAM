import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'
import Admin from '../models/admin.js'

export const loginController = async (req, res) => {
	try {
		const { username, password } = req.body
		const existingUser = await User.findOne({ username })
		
		if(!existingUser) return res.status(404).json({ message: "User not found" })

		const comparePassword = await bcrypt.compare(password, existingUser.password)
		if(!comparePassword) return res.status(400).json({ message: "Password is incorrect" })
		
		const token = jwt.sign({ username: existingUser.username, email: existingUser.email, id: existingUser._id }, "secret", { expiresIn: '3h' })
		
		res.status(200).json({ username: existingUser.username, email: existingUser.email, id: existingUser._id, token })
	}
	catch(e) {
		res.status(500).json({ message: e.message })
	}
}

export const registerController = async (req, res) => {
	try {
		const { username, email, password } = req.body
		const existingUsername = await User.findOne({ username })
		const existingEmail = await User.findOne({ email })
		const hashedPassword = await bcrypt.hash(password, 12)
		
		if(existingUsername) return res.status(404).json({ message: "Username already existing" })
		if(existingEmail) return res.status(404).json({ message: "Email already existing" })
		
		const result = await User.create({ username, password: hashedPassword, email })
		const token = jwt.sign({ username: result.username, id: result._id }, "secret", { expiresIn: '3h' })

		res.status(200).json({ username: result.username, email: result.email, token })
	}
	catch(e) {
		res.status(500).json({ message: e.message })
	}
}

export const adminLoginController = async (req, res) => {
	try {
		const { username, password } = req.body
		const existingUser = await Admin.findOne({ username })
		
		if(!existingUser) return res.status(404).json({ message: "User not found" })

		const comparePassword = await bcrypt.compare(password, existingUser.password)
		if(!comparePassword) return res.status(400).json({ message: "Password is incorrect" })
		
		const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, "admin", { expiresIn: '3h' })
		
		res.status(200).json({ username: existingUser.username, id: existingUser._id, token })
	}
	catch(e) {
		res.status(500).json({ message: e.message })
	}
}