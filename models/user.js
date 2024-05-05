import { Schema, model } from "mongoose"

const userScheme = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
})

const userModel = model('User', userScheme)
export default userModel