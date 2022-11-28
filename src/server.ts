import 'dotenv/config'
import express, { Request, Response } from 'express'

const routes = require('./routes/routes')

const app = express()
app.use(express.json())

app.use(routes)


app.listen(process.env.API_PORT, () => console.log(`🚀 Server started on port ${process.env.API_PORT}`))