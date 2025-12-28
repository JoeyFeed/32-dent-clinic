import express from 'express'
import { create, getAll } from '../controllers/appointmentsController.js'
import { validate, appointmentValidation } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validate(appointmentValidation), create)
router.get('/', getAll)

export default router


