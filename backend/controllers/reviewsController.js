import { getAllReviews, createReview } from '../models/Review.js'

export const getAll = async (req, res, next) => {
  try {
    const reviews = await getAllReviews()
    res.json({
      success: true,
      data: reviews
    })
  } catch (error) {
    next(error)
  }
}

export const create = async (req, res, next) => {
  try {
    const review = await createReview(req.body)
    res.status(201).json({
      success: true,
      data: review,
      message: 'Отзыв успешно создан'
    })
  } catch (error) {
    next(error)
  }
}


