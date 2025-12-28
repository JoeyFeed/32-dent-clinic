import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import appointmentsRoutes from './routes/appointments.js'
import doctorsRoutes from './routes/doctors.js'
import servicesRoutes from './routes/services.js'
import reviewsRoutes from './routes/reviews.js'
import feedbackRoutes from './routes/feedback.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' })
})

app.use('/api/appointments', appointmentsRoutes)
app.use('/api/doctors', doctorsRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/reviews', reviewsRoutes)
app.use('/api/feedback', feedbackRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

