const user = require('../ModelSchema/userModel')

module.exports = {
    // signing in as a new user on the app
    signIn:  async (req,res)=>{
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
    },

    // Signing out as a user in the app (Deleting info)
    signOut: async(req,res)=>{
        try {
            const userDeleted = await user.findByIdAndDelete({_id:req.params.id}) 
            res.json({message: `user with id ${req.params.id} deleted`})
        } catch (err) {
            res.json({message: err.message})
        }
    },

    //option for getting all the users
    allUsers: async (req,res)=>{
        try {
            const allUser = await user.find()
            res.json(allUser)
        } catch (err) {
            res.json({message: err.message})
        }
    } 
}