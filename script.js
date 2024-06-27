const mongoose = require("mongoose")
const User = require("./userschema")

mongoose.connect("mongodb://localhost:27017/mongoose2")

const newuser = new User({
    name: "Ethan",
    age: 18
})

newuser.save().then(() => console.log("UserSaved"))

async function findall() {
    const user = await User.find()
    console.log(user)
}
findall()