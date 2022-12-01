const express = require('express')
const db = require('./utils/database')

const userRouter = require('./users/users.router')

const port = 9004
const app = express()
app.use(express.json())

db.authenticate()
    .then(() => console.log('Database autenticada correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database sincronizada correctamente'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({message: 'Ok!'})
})

app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})