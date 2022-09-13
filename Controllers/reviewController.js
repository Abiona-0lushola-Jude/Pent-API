const review = require('../ModelSchema/reviewSchema')

module.exports = {
    // getting all reviews
    getAllReview:  async (req,res)=>{
        try {
            const allReview = await review.find().sort({uploadTime:'desc'})
            res.json(allReview)
        } catch (err) {
            res.json({message: err.message})
        }
    },

    // posting reviews 
    postReview: async (req,res)=>{
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
    },

    // deleting oneReview
    deleteReview: async(req,res)=>{
        try {
            const reviewDeleted = await review.findByIdAndDelete({_id:req.params.id}) 
            res.json(reviewDeleted, {message: `review made id ${req.params.id} has been deleted`})
        } catch (err) {
            res.json({message: err.message})
        }
    }
}