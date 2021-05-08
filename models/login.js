const mongoose=require('mongoose');
const loginSchema=mongoose.Schema({
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
const login=module.exports=mongoose.model('login',loginSchema);