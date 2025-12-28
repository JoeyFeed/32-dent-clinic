import { body, validationResult } from 'express-validator'

export const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    return res.status(400).json({
      error: {
        message: 'Validation failed',
        errors: errors.array()
      }
    })
  }
}

export const appointmentValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Имя обязательно')
    .isLength({ min: 2, max: 100 })
    .withMessage('Имя должно быть от 2 до 100 символов'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Телефон обязателен')
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Неверный формат телефона'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Неверный формат email'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Неверный формат даты'),
  body('time')
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Неверный формат времени')
]

export const feedbackValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Имя обязательно')
    .isLength({ min: 2, max: 100 })
    .withMessage('Имя должно быть от 2 до 100 символов'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Телефон обязателен')
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Неверный формат телефона'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Неверный формат email'),
  body('message')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Сообщение не должно превышать 1000 символов')
]

export const reviewValidation = [
  body('user_name')
    .trim()
    .notEmpty()
    .withMessage('Имя пользователя обязательно'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Рейтинг должен быть от 1 до 5'),
  body('comment')
    .trim()
    .notEmpty()
    .withMessage('Комментарий обязателен')
    .isLength({ max: 500 })
    .withMessage('Комментарий не должен превышать 500 символов')
]


