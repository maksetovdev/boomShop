import express from "express";
import { engine, create } from "express-handlebars"
import authRoutes from './routes/auth.js'
import productsRoutes from './routes/products.js'
const app = express()
const hbs = create({defaultLayout: "main", extname: "hbs",})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

//Routes
app.use(authRoutes)
app.use(productsRoutes)

const PORT = process.env.PORT || 4100
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))