import pool from '../config/database.js'
import { createUser, getUserByPhone } from './User.js'

export const createAppointment = async (appointmentData) => {
  const { name, phone, email, doctor_id, service_id, date, time, message } = appointmentData

  // Find or create user
  let user = await getUserByPhone(phone)
  if (!user) {
    user = await createUser({ name, phone, email })
  }

  const query = `
    INSERT INTO appointments (user_id, doctor_id, service_id, date, time, message, status, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, 'pending', NOW())
    RETURNING *
  `
  const result = await pool.query(query, [
    user.id,
    doctor_id || null,
    service_id || null,
    date || null,
    time || null,
    message || null
  ])
  return result.rows[0]
}

export const getAppointments = async (filters = {}) => {
  let query = 'SELECT * FROM appointments'
  const conditions = []
  const values = []
  let paramIndex = 1

  if (filters.user_id) {
    conditions.push(`user_id = $${paramIndex++}`)
    values.push(filters.user_id)
  }

  if (filters.status) {
    conditions.push(`status = $${paramIndex++}`)
    values.push(filters.status)
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ')
  }

  query += ' ORDER BY created_at DESC'

  const result = await pool.query(query, values)
  return result.rows
}


