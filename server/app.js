const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const UserModel = require('./models/UserModel')

require('dotenv').config()

const port = process.env.PORT || 5173
const app = express()

app.use(
	cors({
		origin: ['http://localhost:5173'],
		methods: 'GET, PATCH, POST, DELETE'
	})
)
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)

// получение всех пользователей из БД
app.get('/getUsers', async (req, res) => {
	try {
		const users = await UserModel.find({})
		res.send({ users })
	} catch (err) {
		console.error('Произошла ошибка при получении пользователей', err)
		res.send({ error: 'Произошла ошибка при получении пользователей' })
	}
})

// добавление нового пользователя в БД
app.post('/addUser', async (req, res) => {
	try {
		const { id, name, gender, email } = req.body
		const user = { id, name, gender, email }
		await UserModel.create(user)
		res.send({ message: 'Пользователь успешно добавлен в БД' })
	} catch (err) {
		console.error('Произошла ошибка при добавлении нового пользователя', err)
		res.send({
			error: `Произошла ошибка при добавлении нового пользователя ${err}, ${user.id}`
		})
	}
})

// удаление пользователя из БД
app.delete('/deleteUser/:id', async (req, res) => {
	try {
		const { id } = req.params
		await UserModel.findByIdAndDelete(id)
		res.send({ message: 'Пользователь успешно удален из БД' })
	} catch (err) {
		console.error('Произошла ошибка при удалении пользователя', err)
		res.send({
			error: `Произошла ошибка при удалении пользователя ${err}`
		})
	}
})

app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
