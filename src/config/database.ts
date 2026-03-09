import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

export default class Database {
  private static instance: Database
  public client: PrismaClient

  private constructor() {
    this.client = new PrismaClient()
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  async connect(): Promise<void> {
    await this.client.$connect()
    console.log('Banco conectado')
  }
}