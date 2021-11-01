import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()
connectDB()

app.use(express.json())

app.get('/' , (req,res) =>{
    res.send("api is running")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
//TODO do something about payment gateway
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)
app.use(errorHandler)
//TODO do smoething about it it shows proxy error 
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} on ${PORT}`))
