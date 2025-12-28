import { createAppointment } from '../models/Appointment.js'

export const create = async (req, res, next) => {
  try {
    const appointment = await createAppointment(req.body)
    res.status(201).json({
      success: true,
      data: appointment,
      message: 'Запись успешно создана'
    })
  } catch (error) {
    next(error)
  }
}

export const getAll = async (req, res, next) => {
  try {
    const { getAppointments } = await import('../models/Appointment.js')
    const appointments = await getAppointments(req.query)
    res.json({
      success: true,
      data: appointments
    })
  } catch (error) {
    next(error)
  }
}


