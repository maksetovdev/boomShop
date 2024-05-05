import {Router} from 'express'
import userModel from '../models/user.js'
import bcrypt from 'bcrypt'

const router = Router()

router.get('/login', (req, res) => {
	res.render('login', {	
		title: 'Login | Boom Shop',
		isLogin: true
	})
})
router.get('/register', (req, res) => {
	res.render('register', {
		title: 'Register | Boom Shop',
		isRegister: true
	})
})

router.post('/login',(req, res) => {
	console.log(req.body);
	res.redirect('/')
})

router.post('/register', async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 10)
	const userData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashedPassword,
	}
	const user = await userModel.create(userData)
	res.redirect('/')
})
export default router
