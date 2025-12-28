import pool from '../config/database.js'

export const getSettings = async () => {
  const query = 'SELECT * FROM settings ORDER BY id LIMIT 1'
  const result = await pool.query(query)
  return result.rows[0] || {
    phone: '+7(777)777-77-77',
    address: 'Котовск, улица дом',
    hours: 'Пн-Пт: 9:00 - 21:00',
    social_links: JSON.stringify({})
  }
}

export const updateSettings = async (settingsData) => {
  const { phone, address, hours, social_links } = settingsData
  const query = `
    INSERT INTO settings (phone, address, hours, social_links)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (id) DO UPDATE
    SET phone = $1, address = $2, hours = $3, social_links = $4
    RETURNING *
  `
  const result = await pool.query(query, [
    phone,
    address,
    hours,
    typeof social_links === 'string' ? social_links : JSON.stringify(social_links || {})
  ])
  return result.rows[0]
}


