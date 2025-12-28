import pool from '../config/database.js'

export const getAllReviews = async () => {
  const query = `
    SELECT r.*, u.name as user_name, u.photo_url
    FROM reviews r
    LEFT JOIN users u ON r.user_id = u.id
    ORDER BY r.created_at DESC
  `
  const result = await pool.query(query)
  return result.rows
}

export const createReview = async (reviewData) => {
  const { user_id, user_name, rating, comment } = reviewData
  const query = `
    INSERT INTO reviews (user_id, rating, comment, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *
  `
  const result = await pool.query(query, [user_id || null, rating, comment])
  
  // If user_name provided but no user_id, update the review
  if (user_name && !user_id) {
    const updateQuery = `
      UPDATE reviews 
      SET user_name = $1 
      WHERE id = $2
    `
    await pool.query(updateQuery, [user_name, result.rows[0].id])
  }
  
  return result.rows[0]
}


