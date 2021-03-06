import Blogs from '../models/blogs.js'
import SavedBlogs from '../models/savedBlogs.js'

export const getBlogs = async (req, res) => {
	try {
		const blogs = await Blogs.find()
		
		res.status(200).json(blogs)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const getSingleBlog = async (req, res) => {
	try {
		const { title } = req.params
		const blog = await Blogs.findOne({ title: title })

		res.status(200).json({ ...blog, title: blog.title.replace(/-/g, " ") })
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const getLatestBlogs = async (req, res) => {
	try {
		const blogs = await Blogs.find()
		const latest = []
		let counter = 0
		let lengthChecker = blogs.length > 2 ? 1 : 0

		for(let i=blogs.length-1; i>=(blogs.length-3)*lengthChecker; i--) latest[counter++] = blogs[i]

		res.status(200).json(latest)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const getSavedBlogs = async (req, res) => {
	try {
		const data = await SavedBlogs.find()

		res.status(200).json(data)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const addSavedBlog = async (req, res) => {
	try {
		const data = req.body
		const blogData = new SavedBlogs({ ...data, savedId: req.userId, title: data.title.replace(/ /g, "-") })
		
		await blogData.save()
		res.status(200).json(blogData)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const deleteSavedBlog = async (req, res) => {
	try {
		const { id } = req.params
		
		await SavedBlogs.findByIdAndDelete(id)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}

export const addBlog = async (req, res) => {
	try {
		const data = req.body
		const blogData = new Blogs({ ...data, title: data.title.replace(/ /g, "-") })
		
		await blogData.save()
		res.status(200).json(blogData)
	}
	catch(e) {
		res.status(400).json({ message: e.message })
	}
}