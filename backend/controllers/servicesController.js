import { getAllServices, getServicesByCategory, getServiceById } from '../models/Service.js'

export const getAll = async (req, res, next) => {
  try {
    const { category } = req.query
    const services = category 
      ? await getServicesByCategory(category)
      : await getAllServices()
    res.json({
      success: true,
      data: services
    })
  } catch (error) {
    next(error)
  }
}

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const service = await getServiceById(id)
    if (!service) {
      return res.status(404).json({
        success: false,
        error: { message: 'Услуга не найдена' }
      })
    }
    res.json({
      success: true,
      data: service
    })
  } catch (error) {
    next(error)
  }
}


