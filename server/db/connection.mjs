import mongoose from 'mongoose'
import 'dotenv/config'

const connectionString = process.env.MONGODB_URI || ''
console.log(connectionString);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error)
  })
