const mongoose=require('mongoose');
const registerSchema=mongoose.Schema({
    FullName:{
        type:String,
        required: true,
        minLength:8
    },
    phoneNumber:{
        type:Number,
        required: true,
        minLength:10
    }
});
const register=module.exports=mongoose.model('register',registerSchema);