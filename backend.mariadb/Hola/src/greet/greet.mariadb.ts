import { createConnection, Connection, ConnectionConfig } from 'mariadb'
import * as dotenv from 'dotenv'

dotenv.config()

const dbConfig: ConnectionConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
  }

let connection: Connection;

async function connectToDatabase(): Promise<void> {
    connection = await createConnection(dbConfig)    
}

connectToDatabase()

export type Param = {
    greet: string
    language: string
  }

export class Greet {

    static async findAll() {
      return await connection.query(
        'SELECT id, greet, language FROM regards'
      )
    }
  
    static async findById(id: number) {
      const result = await connection.query(
        'SELECT id, greet, language FROM regards where id = ?', [id]
      )
  
      return result[0]
    }
  
    static async create(param: Param) {
      const [{ id }] = await connection.query(
        'INSERT INTO regards (greet, language) VALUES (?, ?) returning id',
        [param.greet, param.language]
      )
  
      const result = await connection.query(
        'SELECT id, greet, language FROM regards where id = ?', [id]
      )
  
      return result[0]
    }
  }
