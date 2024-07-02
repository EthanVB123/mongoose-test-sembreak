const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config() // Initialises the environment variables in the .env file.

const app = express()
app.use(express.json())


mongoose.connect(process.env.DATABASE_URL) // database called servertest1
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DB"))

const usersRouter = require("./routes/users")
app.use("/users", usersRouter) // url "localhost:3000/users/* goes to this router"

app.listen(3000, () => console.log("Server Started")) // method in here called upon server startup