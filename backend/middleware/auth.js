import jwt from 'jsonwebtoken'

const Auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1]
		let decodedData = jwt.verify(token, "secret")
		req.userId = decodedData?.id
		next()
	}
	catch(e) {
		console.log(e)
	}
}

export default Auth