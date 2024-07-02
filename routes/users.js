const express = require("express")
const router = express.Router()
const User = require("../models/user")

// getting all
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// getting 1
router.get("/:id", (req, res) => { // colon id means it is parameter
    
})
// creating 1
router.post("/", (req, res) => { 
    
})
// updating 1
router.patch("/:id", (req, res) => { // patch not put because only update some fields
    
})
// deleting 1
router.delete("/:id", (req, res) => { 
    
})
module.exports = router