import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function runMigrations() {
  try {
    const client = await pool.connect()
    
    // Read migration files
    const migrationFiles = [
      '001_create_tables.sql',
      '002_seed_data.sql'
    ]

    for (const file of migrationFiles) {
      const filePath = path.join(__dirname, file)
      const sql = fs.readFileSync(filePath, 'utf8')
      
      console.log(`Running migration: ${file}`)
      await client.query(sql)
      console.log(`✓ Migration ${file} completed`)
    }

    client.release()
    console.log('All migrations completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Migration error:', error)
    process.exit(1)
  }
}

runMigrations()


