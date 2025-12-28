export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err)

  const status = err.status || err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  res.status(status).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  })
}

export const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`)
  error.status = 404
  next(error)
}


