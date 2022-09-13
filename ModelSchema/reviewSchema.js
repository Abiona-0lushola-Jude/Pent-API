const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
   landlordReview:{
        type:String,
   },
   EnvironmentReview:{
         type:String,
    },
    QualityofAmentities:{
        type:String
    },
    file: {
        data: Buffer,
        contentType: String,
    },
    uploadTime: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('reviewSchema', reviewSchema)