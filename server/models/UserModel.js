const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false
	}
})

const UserModel = mongoose.model('users', userShema)

module.exports = UserModel
