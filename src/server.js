const express = require('express')
const path = require('path')
const userController = require('./domain/users/html-controller')
const app = express()
const PORT = process.env.PORT || 3001

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({extended: false}))

app.get('/users', userController.getAll)
app.post('/users/create', userController.create)
app.delete('/users/remove', userController.removeById)

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})