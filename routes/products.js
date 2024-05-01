import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Main | Boom Shop',
	})
})
router.get('/products', (req, res) => {
	res.render('products', {
		title: 'Products | Boom Shop',
		isProducts: true
	})
})
router.get('/add', (req, res) => {
	res.render('add', {
		title: 'Add products | Boom Shop',
		isAdd: true
	})
})

export default router
