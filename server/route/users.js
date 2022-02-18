const express = require('express')
const router = express.Router()
const usersPoint = require('../controllers/usersPoint')

//localhost:8000/users/auth
router.post('/auth', usersPoint.authentication)

//localhost:8000/users/login
router.post('/login', usersPoint.authorization)

//localhost:8000/users/changeProfile
router.post('/changeProfile', usersPoint.changeProfile)

//localhost:8000/users/changeEmail
router.post('/changeEmail', usersPoint.changeEmail)
   
//localhost:8000/users/changeEmail
router.post('/changePhone', usersPoint.changePhone)

//localhost:8000/users/changeEmail
router.post('/changePassword', usersPoint.changePassword)

//localhost:8000/users/verifyToken
router.post('/verifyToken', usersPoint.verifyToken)

//localhost:8000/users/logout
router.post('/deleteAccount', usersPoint.logout)

//localhost:8000/users/setId
router.post('/setId', usersPoint.setId)

//localhost:8000/users/pass
router.post('/pass', usersPoint.validatePassword)


module.exports = router 