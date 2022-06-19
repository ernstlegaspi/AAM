import express from 'express'

import { loginController, registerController, adminLoginController } from '../controllers/userController.js'

const route = express.Router()

route.post(`/login`, loginController)
route.post(`/register`, registerController)
route.post(`/admin-login`, adminLoginController)

export default route