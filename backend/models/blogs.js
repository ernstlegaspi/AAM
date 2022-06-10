import mongoose from 'mongoose'

const blogsSchema = mongoose.Schema({
	title: String,
	description: String,
	date: {
		type: Date,
		default: new Date()
	},
	image: String
})

export default mongoose.model("Mensturation Cycle", blogsSchema)