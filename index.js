import express from 'express'
import cors from 'cors'
require('dotenv').config()
import initRouter from './src/router'
require('./connection_database');


const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//CRUD

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Roter
initRouter(app)

// app.use('/', (req, res) => {
//     return res.send('SERVER_ON')
// })

const PORT = process.env.PORT || 5100

const listener = app.listen(PORT, () => {
    console.log('Server is running on the port: ' + listener.address().port)
})