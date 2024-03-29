import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()

connectDB()

app.use((req, res, next) => {
   console.log("Hello")
   next()
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


app.get('/', (req, res) => {
   res.send("API is running")
})

app.get('/api/products/:id', (req, res) => {
   const product = products.find(p => p._id === req.params.id)
   res.json(product)
})
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,
   console.log(`App running in ${process.env.NODE_ENV} mode on port  ${PORT}`))