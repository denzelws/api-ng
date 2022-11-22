import { Request, Response } from "express"

const { Client } = require('pg')

    const client = new Client({
        user: "api-ng",
        host: "localhost",
        database: "api-ng",
        password: "123456",
        port: 5433
    })

   client.connect(function(err) {
    if (err) throw err
    console.log('Conected')
   })

   





