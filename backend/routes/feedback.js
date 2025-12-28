import express from 'express'
import { create } from '../controllers/feedbackController.js'
import { validate, feedbackValidation } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validate(feedbackValidation), create)

export default router


