import pool from '../config/database.js'

export const createUser = async (userData) => {
  const { name, phone, email } = userData
  const query = `
    INSERT INTO users (name, phone, email, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *
  `
  const result = await pool.query(query, [name, phone || null, email || null])
  return result.rows[0]
}

export const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1'
  const result = await pool.query(query, [id])
  return result.rows[0]
}

export const getUserByPhone = async (phone) => {
  const query = 'SELECT * FROM users WHERE phone = $1'
  const result = await pool.query(query, [phone])
  return result.rows[0]
}


