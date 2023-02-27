import * as dotenv from 'dotenv'
dotenv.config()

declare var process : {
  env: {
    DB_HOST: string,
    DB_USER : string,
    DB_PASSWORD : string,
    DB_NAME: string,
  }
}

export const CONFIG = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}