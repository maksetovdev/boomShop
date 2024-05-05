import {Router} from 'express'
import userModel from '../models/user.js'
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
	console.log(req.body)

	const userData = {
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	}
	const user = await userModel.create(userData)
	console.log(user);
	res.redirect('/')
})
export default router
