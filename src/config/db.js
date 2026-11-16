import mongoose from 'mongoose'

export async function dbConnection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/data')
  } catch (error) {
    throw new Error(`Error connecting to data base: ${error.message}`)
  }
}
