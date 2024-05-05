import express from "express";
import { engine, create } from "express-handlebars"
import mongoose from "mongoose";
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import productsRoutes from './routes/products.js'

dotenv.config()

const app = express()
const hbs = create({defaultLayout: "main", extname: "hbs",})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Routes
app.use(authRoutes)
app.use(productsRoutes)

const startApp = () => {
  try {
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.MONGO_URI)
    const PORT = process.env.PORT || 4100
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

startApp()