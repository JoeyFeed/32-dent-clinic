import { getAllDoctors, getDoctorById } from '../models/Doctor.js'

export const getAll = async (req, res, next) => {
  try {
    const doctors = await getAllDoctors()
    res.json({
      success: true,
      data: doctors
    })
  } catch (error) {
    next(error)
  }
}

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const doctor = await getDoctorById(id)
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: { message: 'Врач не найден' }
      })
    }
    res.json({
      success: true,
      data: doctor
    })
  } catch (error) {
    next(error)
  }
}


