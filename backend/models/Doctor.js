import pool from '../config/database.js'

export const getAllDoctors = async () => {
  const query = 'SELECT * FROM doctors ORDER BY name'
  const result = await pool.query(query)
  return result.rows
}

export const getDoctorById = async (id) => {
  const query = 'SELECT * FROM doctors WHERE id = $1'
  const result = await pool.query(query, [id])
  return result.rows[0]
}


