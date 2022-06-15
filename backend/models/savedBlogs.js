import mongoose from 'mongoose'

const blogsSchema = mongoose.Schema({
	title: String,
	description: String,
	savedId: String,
	date: {
		type: Date,
		default: new Date()
	},
	image: String
})

export default mongoose.model("Saved Mensturation Cycle", blogsSchema)