import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import Routes from './routes/blogRoute.js'

const app = express()
const PORT = 2217
const CONNECTION_URL = "mongodb+srv://imagedumpusername:imagedumppassword@cluster0.qki6i.mongodb.net/?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '30mb' }))

app.use(`/blogs`, Routes)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server is running in port ${PORT}`)))
	.catch(e => console.log(e))