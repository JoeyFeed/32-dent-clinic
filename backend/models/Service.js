import pool from '../config/database.js'

export const getAllServices = async () => {
  const query = 'SELECT * FROM services ORDER BY category, name'
  const result = await pool.query(query)
  return result.rows
}

export const getServicesByCategory = async (category) => {
  const query = 'SELECT * FROM services WHERE category = $1 ORDER BY name'
  const result = await pool.query(query, [category])
  return result.rows
}

export const getServiceById = async (id) => {
  const query = 'SELECT * FROM services WHERE id = $1'
  const result = await pool.query(query, [id])
  return result.rows[0]
}


