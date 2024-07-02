const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        password: String
    }
)

module.exports = mongoose.model("User", userSchema);