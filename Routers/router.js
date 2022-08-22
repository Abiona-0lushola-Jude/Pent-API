const express = require('express')
const router = express.Router()
const user = require('../ModelSchema/userModel')
const review = require('../ModelSchema/reviewSchema')

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
router.post('/post/review',async (req,res)=>{
    try {
        const newReview = new review({
            username:req.body.username,
           landlordReview:req.body.landlordReview,
           EnvironmentReview:req.body.EnvironmentReview,
            QualityofAmentities:req.body.QualityofAmentities,
            file:"",
        })
        await newReview.save()
        res.json(newReview)
    } catch (err) {
        res.json({message: err.message})
    }
})

// getting all reviews
router.get('/review', async (req,res)=>{
    try {
        const allReview = await review.find().sort({uploadTime:'desc'})
        res.json(allReview)
    } catch (err) {
        res.json({message: err.message})
    }
})

// deleting oneReview
router.delete('/review/delete/:id', async(req,res)=>{
    try {
        const reviewDeleted = await review.findByIdAndDelete({_id:req.params.id}) 
        res.json(reviewDeleted, {message: `review made id ${req.params.id} has been deleted`})
    } catch (err) {
        res.json({message: err.message})
    }
})







module.exports = router