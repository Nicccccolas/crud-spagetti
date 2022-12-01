const express = require('express')
const router = express.Router()

const userServices = require('./users.services')

router.get('/api/v1/users', userServices.getAllUsers)
router.post('/api/v1/users', userServices.postUser)
router.get('/api/v1/users/:id', userServices.getUserById)
router.patch('/api/v1/users/:id', userServices.patchUser)
router.delete('/api/v1/users/:id', userServices.deleteUser)

module.exports = router
