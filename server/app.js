const express = require('express')
const app = express()
const tickets = require('./route/tickets')
const aviaTickets = require('./route/aviaTickets')
const users = require('./route/users')
const admin = require('./route/admin')

app.use(require('cors')())
app.use(express.json())
app.use(require('morgan')('dev'))

app.use('/tickets', tickets)
app.use('/aviaTickets', aviaTickets)
app.use('/users', users)
app.use('/admin', admin)

module.exports = app