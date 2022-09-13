const express = require('express')
const router = express.Router()
const user = require('../ModelSchema/userModel')
const reviewController = require('../Controllers/reviewController')

router.get('/user',async (req,res)=>{
    try {
        const allUser = await user.find()
        res.json(allUser)
    } catch (err) {
        res.json({message: err.message})
    }
})

// Signing in for User

router.post('/post', async (req,res)=>{
    const newUser = new user({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        phoneNumber:req.body.phoneNumber
    })

    try {
        await newUser.save()
        res.json(newUser)
    } catch (err) {
        res.json({message: err.message})
    }
})

// deleting one User
router.delete('/user/delete/:id', async(req,res)=>{
    try {
        const userDeleted = await user.findByIdAndDelete({_id:req.params.id}) 
        res.json({message: `user with id ${req.params.id} deleted`})
    } catch (err) {
        res.json({message: err.message})
    }
})


// posting reviews 
router.post('/post/review', reviewController.postReview)

// getting all reviews
router.get('/review', reviewController.getAllReview)

// deleting oneReview
router.delete('/review/delete/:id', reviewController.deleteReview)







module.exports = router