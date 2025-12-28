import express from 'express'
import { getAll, create } from '../controllers/reviewsController.js'
import { validate, reviewValidation } from '../middleware/validation.js'

const router = express.Router()

router.get('/', getAll)
router.post('/', validate(reviewValidation), create)

export default router


