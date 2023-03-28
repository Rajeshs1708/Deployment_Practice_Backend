//Importing all module
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db/connect')
const employeesRoutes = require('./routes/employee.route')

app.use(express.json())
app.use(cors())
db()

//Middleware
app.use('/api', employeesRoutes)
app.use('/', (req, res) => {
  res.send('Welcome to My Application')
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Application is running on PORT ${PORT}`)
})
