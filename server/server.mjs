import express from 'express'
import 'dotenv/config'
import './db/connection.mjs'

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
