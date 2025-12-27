require("dotenv").config();
const mongoose = require("mongoose");
const { boolean } = require("zod");


//.env is good practice
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.error(err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}