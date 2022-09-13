const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const reviewController = require('../Controllers/reviewController')

router.get('/user',userController.allUsers)

// Signing in for User

router.post('/post', userController.signIn)

// deleting one User
router.delete('/user/delete/:id', userController.signOut)


// posting reviews 
router.post('/post/review', reviewController.postReview)

// getting all reviews
router.get('/review', reviewController.getAllReview)

// deleting oneReview
router.delete('/review/delete/:id', reviewController.deleteReview)







module.exports = router