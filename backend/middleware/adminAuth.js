import jwt from 'jsonwebtoken'

const AdminAuth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1]
		let decodedData = jwt.verify(token, "admin")
		req.userId = decodedData?.id
		console.log("here")
		next()
	}
	catch(e) {
		console.log(e)
	}
}

export default AdminAuth