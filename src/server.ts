require("express-async-errors")
import 'dotenv/config'
import express, { Request, Response } from 'express'

const database = require('./database/connection')

const routes = require('./routes/users.routes')

const app = express()
app.use(express.json())

app.use(routes)

database()


// app.get('/message/:id/:user', (req:Request, res:Response) => {
//     const {id, user} = req.params

//     res.send(`
//     Mensagem ID: ${id}.
//     Usuário: ${user}
//     `)
// })

// app.get('/users', (req: Request, res:Response) => {
//    const {id, user} = req.query

//    res.send(`ID do usuário: ${id}. Nome do Usuário: ${user}`)
// })


app.listen(process.env.API_PORT, () => console.log(`🚀 Server started on port ${process.env.API_PORT}`))